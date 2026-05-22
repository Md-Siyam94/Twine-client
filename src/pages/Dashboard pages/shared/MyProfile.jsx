import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useUser from '../../../hooks/useUser';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { useState } from "react";
import { MapPin, CreditCard, User, Mail, Phone, Plus, Check, Trash2, CreditCard as Edit2 } from "lucide-react";
import moment from 'moment/moment';

function CardIcon({ type }) {
    const colors = { visa: "text-blue-700", mastercard: "text-red-600" };
    return (
        <div className={`font-bold text-sm tracking-wide uppercase ${colors[type] || "text-gray-600"}`}>
            {type}
        </div>
    );
}


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const [userInformation] = useUser()
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.displayName,
        email: user?.email,
        phone: user?.phone,
    });
    
    console.log(userInformation);
    const handleChange = (e) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    };
    return (
        <div >
            <h1 className='text-lg my-1'>Welcome <span className='font-semibold'> {userInformation?.name}</span></h1>

            <div className="space-y-6">

                {/* Personal Info */}
                <div className="bg-white grid lg:grid-cols-12 gap-4 items-center rounded-2xl border border-gray-100 shadow-sm ">
                    {/* image */}
                    <div className='col-span-2 mt-4 ml-4 mx-auto'>
                        <img className='h-24 w-24 rounded-full object-cover  ' src={userInformation?.photoURL} alt="user photo" />
                    </div>

                    <div className='col-span-10'>
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-sky-500" />
                                <h3 className="font-semibold text-gray-900">Personal Information</h3>
                            </div>
                            <button
                                onClick={() => setEditMode((v) => !v)}
                                className="flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
                            >
                                {editMode ? (
                                    <>
                                        <Check size={14} /> Save
                                    </>
                                ) : (
                                    <>
                                        <Edit2 size={14} /> Edit
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                { label: "Full Name", name: "name", icon: User },
                                { label: "Email Address", name: "email", icon: Mail },
                                { label: "Phone Number", name: "phone", icon: Phone },
                            ].map(({ label, name, icon: Icon }) => (
                                <div key={name} className={name === "email" ? "sm:col-span-1" : ""}>
                                    <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
                                    {editMode ? (
                                        <input
                                            disabled={name === 'email'}
                                            type="text"
                                            name={name}
                                            value={formData[name]}
                                            onChange={handleChange}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-400 transition-colors"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-2.5">
                                            <Icon size={15} className="text-gray-300 flex-shrink-0" />
                                            <p className="text-sm text-gray-800">{formData[name]}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1.5">Member Since</label>
                                <p className="text-sm text-gray-800">{moment(userInformation?.createdAt).format('LL')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Addresses */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-sky-500" />
                            <h3 className="font-semibold text-gray-900">Saved Addresses</h3>
                        </div>
                        <button className="flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors">
                            <Plus size={14} /> Add New
                        </button>
                    </div>

                    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {user?.addresses?.map((addr) => (
                            <div
                                key={addr?.id}
                                className={`relative rounded-xl p-4 border-2 transition-colors ${addr.isDefault ? "border-sky-400 bg-sky-50/40" : "border-gray-100 bg-gray-50/40"
                                    }`}
                            >
                                {addr.isDefault && (
                                    <span className="absolute top-3 right-3 text-xs font-semibold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">
                                        Default
                                    </span>
                                )}
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin size={14} className="text-sky-500" />
                                    <span className="text-sm font-semibold text-gray-800">{addr?.label}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {addr?.street}
                                    <br />
                                    {addr?.city}, {addr?.state} {addr?.zip}
                                    <br />
                                    {addr?.country}
                                </p>
                                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                                    <button className="text-xs font-medium text-sky-600 hover:text-sky-700 transition-colors">Edit</button>
                                    {!addr?.isDefault && (
                                        <>
                                            <span className="text-gray-200">|</span>
                                            <button className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors">
                                                Set Default
                                            </button>
                                            <span className="text-gray-200">|</span>
                                            <button className="text-xs font-medium text-red-400 hover:text-red-500 transition-colors flex items-center gap-1">
                                                <Trash2 size={11} /> Delete
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
                        <div className="flex items-center gap-2">
                            <CreditCard size={16} className="text-sky-500" />
                            <h3 className="font-semibold text-gray-900">Payment Methods</h3>
                        </div>
                        <button className="flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors">
                            <Plus size={14} /> Add Card
                        </button>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default MyProfile;