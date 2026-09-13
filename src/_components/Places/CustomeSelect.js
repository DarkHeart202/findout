"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDown } from "@/icons";

export default function CustomeSelect({
  label,
  icon, // استقبال الـ JSX element مباشرة
  options = [],
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOption ? selectedOption.label : placeholder;

  return (
    <div
      ref={dropdownRef}
      className={`relative border border-border w-full lg:w-52 px-4 py-2 bg-slate-50/80 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer select-none ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs">
          {icon} {/* طباعة الأيقونة الممررة كما هي */}
          <span className="leading-none text-header text-sm">{label}</span>
        </div>
        <ArrowDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Selected Value */}
      <div className="text-sm text-slate-700 font-medium mt-1 truncate">
        {selectedLabel}
      </div>

      {/* Options Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] right-0 left-0 z-50 bg-white border border-slate-100 rounded-xl shadow-xl py-1 overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={(e) => {
                e.stopPropagation();
                onChange?.(opt.value);
                setIsOpen(false);
              }}
              // 1. إضافة flex و items-center و gap-2 لصف الدائرة والنص بجانب بعض
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer hover:bg-slate-50 ${
                value === opt.value
                  ? "text-main-blue bg-blue-50/50 font-bold"
                  : "text-slate-700"
              }`}
            >
              {value === opt.value && (
                <span className="block w-2 h-2 rounded-full bg-main-blue" />
              )}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
