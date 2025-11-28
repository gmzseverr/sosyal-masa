"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Eye, EyeOff } from "lucide-react";

interface RegisterScreenProps {
  onNavigate: (state: string) => void;
}

export default function RegisterScreen({ onNavigate }: RegisterScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleRegister = () => {
    setError(null);

    // Form alanlarının doluluğunu kontrol et
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Geçerli bir e-posta adresi girin.");
      return;
    }

    // Şifre uzunluğu kontrolü
    if (form.password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır.");
      return;
    }

    // Şifre eşleşme kontrolü
    if (form.password !== form.confirmPassword) {
      setError("Şifreler eşleşmiyor.");
      return;
    }

    console.log("Kayıt Başarılı. Yönlendiriliyor...");
    // Kayıt başarılı: Landing sayfasına yönlendir
    onNavigate("landing");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      {/* Logo */}
      <img
        src="./b690b2c1e82ae92d2fbaaca890f3dd75215255ce.png"
        alt="Converger Logo"
        className="h-52 w-52"
      />
      <p className="text-gray-600 text-center text-xs -mt-6 mb-4">
        Buluşmaları anlamlı bağlara dönüştürüyoruz
      </p>

      {/* Form */}
      <motion.div
        className="flex flex-col justify-center items-center flex-1 space-y-4 w-full max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FloatingInput
          name="fullName"
          label="Ad Soyad"
          type="text"
          value={form.fullName}
          onChange={handleChange}
        />

        <FloatingInput
          name="email"
          label="E-posta"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <div className="relative w-full">
          <FloatingInput
            type={showPassword ? "text" : "password"}
            name="password"
            label="Şifre"
            value={form.password}
            onChange={handleChange}
            className="pr-10 w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="relative w-full">
          <FloatingInput
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            label="Şifre Tekrar"
            value={form.confirmPassword}
            onChange={handleChange}
            className="pr-10 w-full"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Hata Mesajı */}
        {error && (
          <motion.p
            className="text-red-500 text-xs mt-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.p>
        )}

        {/* Veya ayırıcı */}
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-xs">veya</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sosyal login */}
        <div className="flex flex-col w-full space-y-2">
          <Button
            variant="outline-light"
            size="sm"
            className="w-full flex items-center justify-center gap-2 text-xs py-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_91_2236)">
                <path
                  d="M9.99985 8.18188V12.0546H15.3817C15.1453 13.3001 14.4361 14.3547 13.3725 15.0637L16.618 17.5819C18.5089 15.8365 19.5998 13.2729 19.5998 10.2274C19.5998 9.51836 19.5362 8.83648 19.418 8.18199L9.99985 8.18188Z"
                  fill="#4285F4"
                />
                <path
                  d="M4.39556 11.9033L3.66359 12.4636L1.07264 14.4818C2.71809 17.7454 6.09057 20 9.99963 20C12.6996 20 14.9632 19.1091 16.6177 17.5818L13.3723 15.0636C12.4814 15.6636 11.345 16.0273 9.99963 16.0273C7.39964 16.0273 5.19062 14.2728 4.39965 11.9091L4.39556 11.9033Z"
                  fill="#34A853"
                />
                <path
                  d="M1.07265 5.51807C0.390868 6.86347 0 8.38167 0 9.99982C0 11.618 0.390868 13.1362 1.07265 14.4816C1.07265 14.4906 4.39998 11.8998 4.39998 11.8998C4.19998 11.2998 4.08177 10.6634 4.08177 9.99972C4.08177 9.336 4.19998 8.69967 4.39998 8.09968L1.07265 5.51807Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.99983 3.98182C11.4726 3.98182 12.7816 4.49089 13.8271 5.47272L16.6907 2.60912C14.9543 0.990971 12.6999 0 9.99983 0C6.09077 0 2.71809 2.24545 1.07264 5.51819L4.39987 8.10001C5.19073 5.73635 7.39985 3.98182 9.99983 3.98182Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_91_2236">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Google ile Kayıt Ol
          </Button>

          <Button
            variant="outline-light"
            size="sm"
            className="w-full flex items-center justify-center gap-2 text-xs py-1"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0236 0H1.97639C1.58483 0 1.2093 0.155548 0.932425 0.432425C0.655548 0.709301 0.5 1.08483 0.5 1.47639V18.5236C0.5 18.9152 0.655548 19.2907 0.932425 19.5676C1.2093 19.8445 1.58483 20 1.97639 20H19.0236C19.4152 20 19.7907 19.8445 20.0676 19.5676C20.3445 19.2907 20.5 18.9152 20.5 18.5236V1.47639C20.5 1.08483 20.3445 0.709301 20.0676 0.432425C19.7907 0.155548 19.4152 0 19.0236 0ZM6.46111 17.0375H3.45417V7.48611H6.46111V17.0375ZM4.95556 6.1625C4.61447 6.16058 4.2816 6.05766 3.99895 5.86674C3.71629 5.67582 3.49653 5.40544 3.3674 5.08974C3.23826 4.77404 3.20554 4.42716 3.27336 4.09288C3.34118 3.7586 3.5065 3.4519 3.74846 3.21148C3.99042 2.97107 4.29818 2.80772 4.63289 2.74205C4.9676 2.67638 5.31426 2.71133 5.62913 2.84249C5.94399 2.97365 6.21295 3.19514 6.40205 3.47901C6.59116 3.76288 6.69194 4.09641 6.69167 4.4375C6.69488 4.66586 6.65209 4.89253 6.56584 5.104C6.47959 5.31547 6.35165 5.50742 6.18964 5.66839C6.02763 5.82936 5.83487 5.95607 5.62285 6.04096C5.41083 6.12585 5.18389 6.16718 4.95556 6.1625ZM17.5444 17.0458H14.5389V11.8278C14.5389 10.2889 13.8847 9.81389 13.0403 9.81389C12.1486 9.81389 11.2736 10.4861 11.2736 11.8667V17.0458H8.26667V7.49306H11.1583V8.81667H11.1972C11.4875 8.22917 12.5042 7.225 14.0556 7.225C15.7333 7.225 17.5458 8.22083 17.5458 11.1375L17.5444 17.0458Z"
                fill="#0A66C2"
              />
            </svg>
            LinkedIn ile Kayıt Ol
          </Button>
        </div>

        {/* Kayıt ol butonu */}
        <Button
          onClick={handleRegister}
          size="sm"
          className="w-full mt-2 py-2 button-bg hover:button-hover-bg transition-all duration-200 hover:scale-105"
        >
          Kayıt Ol
        </Button>

        {/* Giriş yap */}
        <p className="text-gray-600 -mt-2 text-xs">
          Zaten hesabınız var mı?{" "}
          <span
            className="text-orange-600 font-semibold cursor-pointer hover:underline"
            onClick={() => onNavigate("login")}
          >
            Giriş yap
          </span>
        </p>
      </motion.div>
    </div>
  );
}