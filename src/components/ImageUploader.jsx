import { AlertCircle, GripVertical, ImageIcon, Star, Upload, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from "react";
const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const ImageUploader = ({
  images,
  onChange,
  maxImages = 8,
  maxSizeMb = 5,
}) => {
 const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const [draggedId, setDraggedId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addFiles = useCallback(
    (fileList) => {
      const files = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
      setError(null);

      const remaining = maxImages - images.length;
      if (remaining <= 0) {
        setError(`You can upload a maximum of ${maxImages} images.`);
        return;
      }

      if (files.length > remaining) {
        setError(`Only ${remaining} more image${remaining === 1 ? "" : "s"} can be added.`);
      }

      const accepted = [];
      for (const file of files.slice(0, remaining)) {
        if (file.size > maxSizeMb * 1024 * 1024) {
          setError(`"${file.name}" exceeds the ${maxSizeMb} MB limit and was skipped.`);
          continue;
        }
        accepted.push({
          id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          file,
          url: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
        });
      }

      if (accepted.length) onChange([...images, ...accepted]);
    },
    [images, onChange, maxImages, maxSizeMb]
  );

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const removeImage = (id) => {
    const target = images.find((i) => i.id === id);
    if (target) URL.revokeObjectURL(target.url);
    onChange(images.filter((i) => i.id !== id));
  };

  const setPrimary = (id) => {
    const target = images.find((i) => i.id === id);
    if (!target) return;
    onChange([target, ...images.filter((i) => i.id !== id)]);
  };

  const reorder = (fromId, toId) => {
    if (fromId === toId) return;
    const from = images.findIndex((i) => i.id === fromId);
    const to = images.findIndex((i) => i.id === toId);
    if (from < 0 || to < 0) return;
    const next = [...images];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    onChange(next);
  };

  const primary = images[0];
    return (
        <div className="w-full">
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={(e) => {
                    if (e.currentTarget === e.target) setIsDragging(false);
                }}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        inputRef.current?.click();
                    }
                }}
                className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all duration-200 cursor-pointer
          ${isDragging
                        ? "border-emerald-500 bg-emerald-50 scale-[1.01]"
                        : "border-slate-300 bg-slate-50/60 hover:border-emerald-400 hover:bg-emerald-50/40"
                    }`}
            >
                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-200 ${isDragging ? "bg-emerald-500 text-white" : "bg-white text-emerald-600 shadow-sm group-hover:bg-emerald-100"
                        }`}
                >
                    <Upload className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-800">
                        {isDragging ? "Drop images here" : "Drag & drop product images"}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        or <span className="font-medium text-emerald-600">browse</span> from your device
                    </p>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                    PNG, JPG, WEBP up to {maxSizeMb} MB · up to {maxImages} images
                </p>
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                        if (e.target.files?.length) addFiles(e.target.files);
                        e.target.value = "";
                    }}
                />
            </div>

            {error && (
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{error}</span>
                </div>
            )}

            {images.length > 0 && (
                <div className="mt-6">
                    {/* Main preview */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                        <img src={primary.url} alt={primary.name} className="h-full w-full object-cover" />
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                            <Star className="h-3 w-3 fill-white" />
                            Primary
                        </span>
                    </div>

                    {/* Thumbnails */}
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {images.map((img, idx) => (
                            <div
                                key={img.id}
                                draggable
                                onDragStart={() => setDraggedId(img.id)}
                                onDragEnter={() => setDragOverId(img.id)}
                                onDragEnd={() => {
                                    if (draggedId && dragOverId) reorder(draggedId, dragOverId);
                                    setDraggedId(null);
                                    setDragOverId(null);
                                }}
                                onDragOver={(e) => e.preventDefault()}
                                className={`group relative aspect-square overflow-hidden rounded-xl bg-slate-100 ring-1 transition-all duration-150 ${idx === 0
                                        ? "ring-2 ring-emerald-500"
                                        : "ring-slate-200 hover:ring-emerald-300"
                                    } ${dragOverId === img.id && draggedId !== img.id ? "ring-2 ring-emerald-400 scale-[1.03]" : ""} ${draggedId === img.id ? "opacity-40" : ""
                                    }`}
                            >
                                <img src={img.url} alt={img.name} className="h-full w-full object-cover" />

                                {/* drag handle */}
                                <div className="absolute left-1 top-1 flex h-6 w-6 cursor-grab items-center justify-center rounded-md bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                    <GripVertical className="h-3.5 w-3.5" />
                                </div>

                                {/* remove */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeImage(img.id);
                                    }}
                                    className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-md bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-red-500 group-hover:opacity-100"
                                    aria-label="Remove image"
                                >
                                    <X className="h-3.5 w-3.5" />
                                </button>

                                {/* footer */}
                                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 bg-gradient-to-t from-black/70 to-transparent px-2 pb-1.5 pt-5 opacity-0 transition-opacity group-hover:opacity-100">
                                    <span className="truncate text-[10px] font-medium text-white" title={img.name}>
                                        {img.name}
                                    </span>
                                    {idx !== 0 && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPrimary(img.id);
                                            }}
                                            className="flex shrink-0 items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-700 transition-colors hover:bg-white"
                                        >
                                            <Star className="h-2.5 w-2.5" />
                                            Set primary
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-3 text-center text-xs text-slate-400">
                        {images.length} of {maxImages} images · drag to reorder · hover a thumbnail for options
                    </p>
                </div>
            )}

            {images.length === 0 && !isDragging && (
                <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-8 text-center">
                    <ImageIcon className="h-8 w-8 text-slate-300" />
                    <p className="mt-2 text-xs text-slate-400">No images yet — your product gallery will appear here.</p>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;