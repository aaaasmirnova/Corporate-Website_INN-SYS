"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  vacancy: string;
  phone: string;
  email: string;
  message: string;
  file: FileList;
  privacy: boolean;
};

export default function CareerForm() {
  const t = useTranslations("CareerForm");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validateFile = (files: FileList) => {
    const file = files?.[0];

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

      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("vacancy", data.vacancy);
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
      setSelectedFile(null);
      alert("Form submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-neutral-black-elbrus">
      <div className="max-w-216 w-full mx-auto text-white">
        <h2 className="mb-12 bg-title-gradient bg-clip-text text-2xl font-semibold text-transparent text-center md:text-[40px] md:mb-24">
          {t("title")}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-4 mb-4 md:gap-6 md:mb-6">
            {/* First Name */}
            <div className="w-full md:w-[calc(33%-16px)]">
              <input
                type="text"
                placeholder={t("name")}
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6 ${errors.firstName && "border-red-700"}`}
                {...register("firstName", {
                  required: t("name_required"),
                })}
              />
              {errors.firstName && (
                <p className="text-red-700 text-xs px-4">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="w-full md:w-[calc(33%-12px)]">
              <input
                type="text"
                placeholder={t("surname")}
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6 ${errors.lastName && "border-red-700"}`}
                {...register("lastName", {
                  required: t("surname_required"),
                })}
              />
              {errors.lastName && (
                <p className="text-red-700 text-xs px-4">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Vacancy Select */}
            <div className="w-full md:w-[calc(33%-12px)]">
              <select
                defaultValue=""
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white text-accent-6 ${errors.vacancy && "border-red-700"}`}
                {...register("vacancy", {
                  required: t("vacancy_required"),
                })}
              >
                <option value="" disabled>
                  {t("vacancy")}
                </option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="qa">QA Engineer</option>
              </select>

              {errors.vacancy && (
                <p className="text-red-700 text-xs px-4">
                  {errors.vacancy.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="w-full md:w-[calc(50%-12px)]">
              <input
                type="tel"
                placeholder={t("phone")}
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6 ${errors.phone && "border-red-700"}`}
                {...register("phone", {
                  required: t("phone_required"),
                })}
              />
              {errors.phone && (
                <p className="text-red-700 text-xs px-4">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="w-full md:w-[calc(50%-12px)]">
              <input
                type="email"
                placeholder={t("email")}
                className={`w-full h-12 px-4 border border-accent-5 rounded-xl focus:border-white placeholder:text-accent-6 ${errors.email && "border-red-700"}`}
                {...register("email", {
                  required: t("email_required"),
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t("email_pattern"),
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
          <textarea
            placeholder="Ваше сообщение"
            className="w-full h-24 mb-6 py-2 px-4 border border-accent-5 rounded-xl resize-none focus:border-white placeholder:text-accent-6"
            {...register("message")}
          />

          {/* File Upload */}
          <div className="mb-6">
            <label className="flex flex-col items-center justify-center h-24 px-4 border border-dashed border-accent-5 rounded-xl cursor-pointer">
              {selectedFile ? (
                <p className="text-sm text-accent-6">
                  <span className="text-primary-4">{selectedFile.name}</span>
                </p>
              ) : (
                <p className="text-accent-6">
                  <span className="hidden md:inline">{t("file_here")}</span>{" "}
                  <span className="text-primary-4">{t("attach_file")}</span>
                </p>
              )}

              <input
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                className="hidden"
                {...register("file", { validate: validateFile })}
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Privacy */}
          <div className="mb-20 md:mb-28">
            <label className="flex items-center gap-3 mb-6">
              <input
                type="checkbox"
                className="peer hidden"
                {...register("privacy", {
                  required: t("privacy_required"),
                })}
              />
              <span className="w-4 h-4 border border-accent-7 rounded-sm flex items-center justify-center before:content-[''] before:w-2 before:h-3 before:border-r-2 before:border-b-2 before:rotate-45 before:opacity-0 peer-checked:before:opacity-100" />
              <p className="text-xs">
                {t("privacy_policy")}{" "}
                <Link href="#" className="text-primary-4">
                  {t("privacy_confidentiality")}
                </Link>
              </p>
            </label>

            {errors.privacy && (
              <p className="text-red-700 text-xs px-4">
                {errors.privacy.message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className={`block h-12 mx-auto px-8 bg-button-primary text-neutral-black-elbrus rounded-xl md:min-w-64 ${
                isSubmitting || !isValid
                  ? "text-button-inactive cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : t("submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
