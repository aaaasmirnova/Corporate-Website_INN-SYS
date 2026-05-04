"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  organization?: string;
  phone: string;
  email: string;
  message: string;
  file: FileList;
  privacy: boolean;
};

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validateFile = (files: FileList) => {
    const file = files?.[0];

    // 👇 THIS makes it optional
    if (!file) return true;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    const allowedExtensions = ["pdf", "doc", "docx", "xls", "xlsx"];
    const ext = file.name.split(".").pop()?.toLowerCase();

    if (
      !allowedTypes.includes(file.type) &&
      !allowedExtensions.includes(ext || "")
    ) {
      return "Only PDF, Word, Excel allowed";
    }

    if (file.size > 5_000_000) {
      return "Max file size is 5MB";
    }

    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("file", e.target.files as FileList);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("organization", data.organization || "");
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("privacy", String(data.privacy));

      if (data.file?.[0]) {
        formData.append("file", data.file[0]);
      }

      await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      reset();
      alert("Form submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <section id="contact-form" className="bg-neutral-black-elbrus">
      <div className="max-w-216 w-full mx-auto px-6 text-white">


        <h2 className="mb-12 bg-title-gradient bg-clip-text text-2xl font-semibold text-transparent text-center md:text-[40px] md:mb-24">
          Ответим на ваши вопросы
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-4 mb-4 md:gap-6 md:mb-6">
            <div className="w-full md:w-[calc(50%-12px)]">
              <input
                type="text"
                placeholder="Имя"
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6 ${errors.name && "border-red-700"}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-700 text-xs px-4">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="w-full md:w-[calc(50%-12px)]">
              <input
                type="text"
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6  ${errors.name && "border-red-700"}`}
                placeholder="Организация"
                {...register("organization")}
              />
            </div>

            <div className="w-full md:w-[calc(50%-12px)]">
              <input
                type="tel"
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6  ${errors.name && "border-red-700"}`}
                placeholder="Телефон"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              {errors.phone && (
                <p className="text-red-700 text-xs px-4">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="w-full md:w-[calc(50%-12px)]">
              <input
                type="email"
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6  ${errors.name && "border-red-700"}`}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-700 text-xs px-4">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Ваше сообщение"
              className="w-full h-24 mb-6 py-2 px-4 border border-accent-5 rounded-xl resize-none focus:border-white placeholder:text-accent-6"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-700 text-xs px-4">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <div className="mb-6">
              <label className="flex flex-col items-center justify-center h-24 px-4 border border-dashed border-accent-5 rounded-xl cursor-pointer">
                <p className="text-accent-6">
                  {selectedFile ? (
                    <p className="mt-2 text-sm text-accent-6">
                      <span className="text-primary-4">
                        {selectedFile.name}
                      </span>
                    </p>
                  ) : (
                    <>
                      <span className="hidden md:inline">
                        Перенесите файл сюда или
                      </span>{" "}
                      <span className="text-primary-4">прикрепите его</span>
                    </>
                  )}
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  className="hidden"
                  {...register("file", { validate: validateFile })}
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="mb-20 md:mb-28">
            <div className="mb-5 md:mb-12">
              <label className="flex items-center gap-3">
                <div className="flex cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-0 h-0 peer opacity-0"
                    {...register("privacy", {
                      required: "You must accept the privacy policy",
                    })}
                  />
                  <span className="flex justify-center items-center w-4 h-4 border border-accent-7 rounded-sm before:content-[''] before:block before:h-3 before:w-2 before:border-primary-4 before:border-0 before:border-r-2 before:border-b-2 before:rotate-45 before:opacity-0 peer-checked:before:opacity-100"></span>
                </div>
                <p className="text-xs">
                  Я даю ООО «Инноватика Systems» согласие на обработку
                  персональных данных в целях получения консультаций в
                  соответствии с{" "}
                  <Link href="#privacy-policy" className="text-primary-4">
                    политикой конфиденциальности
                  </Link>
                </p>
              </label>
              {errors.privacy && (
                <p className="text-red-700 text-xs px-4">
                  {errors.privacy.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`block h-12 mx-auto px-8 bg-button-primary text-neutral-black-elbrus rounded-xl md:min-w-64 ${
                isSubmitting || !isValid
                  ? "text-button-inactive cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
