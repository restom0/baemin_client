"use client";

import { login } from "@/apis/fetchApi";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    setError("");
    if (!email.trim() || !password) {
      setError("Vui lòng nhập email và mật khẩu.");
      return;
    }

    setLoading(true);
    try {
      const result = await login({ email: email.trim(), password });
      if (typeof result === "string" && result !== "Invalid email or password") {
        localStorage.setItem("token", result);
        router.push("/dashboard");
        return;
      }

      setError("Thông tin đăng nhập không đúng.");
    } catch {
      setError("Không thể đăng nhập. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="mt-14 flex w-1/3 flex-col gap-5 rounded-2xl border bg-white p-5 pb-8">
      <h1 className="m-0 flex w-full items-center justify-center text-[26px] font-semibold text-beamin">
        Đăng nhập
      </h1>
      <form className="contents" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-3">
          <label className="ds-visually-hidden" htmlFor="login-email">
            Email, số điện thoại hoặc tên đăng nhập
          </label>
          <Input
            id="login-email"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            className="h-[40px]"
            aria-invalid={Boolean(error)}
            data-cy="login-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <label className="ds-visually-hidden" htmlFor="login-password">
            Mật khẩu
          </label>
          <Input.Password
            id="login-password"
            placeholder="Mật khẩu"
            className="h-[40px]"
            aria-invalid={Boolean(error)}
            data-cy="login-password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone aria-hidden="true" /> : <EyeInvisibleOutlined aria-hidden="true" />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <div
            id="login-error"
            className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700"
            role="alert"
          >
            {error}
          </div>
        )}
        <div className="mt-3 flex w-full flex-col">
          <button
            className="h-[40px] w-full rounded-lg bg-beamin uppercase text-white"
            data-cy="login-submit"
            disabled={loading}
            type="submit"
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
          <div className="flex w-full flex-row items-center justify-between text-sm text-beamin">
            <button type="button" className="cursor-pointer border-0 bg-transparent p-0 text-beamin">
              Quên mật khẩu
            </button>
            <button type="button" className="cursor-pointer border-0 bg-transparent p-0 text-beamin">
              Đăng nhập bằng SMS
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300" aria-hidden="true" />
        <span className="mx-4 text-sm text-gray-600">HOẶC</span>
        <div className="flex-grow border-t border-gray-300" aria-hidden="true" />
      </div>
      <div className="flex h-[40px] flex-row items-center justify-center gap-5">
        <button
          type="button"
          className="flex h-full w-full items-center justify-center gap-3 border p-1 text-base text-beamin"
        >
          <FacebookOutlined aria-hidden="true" />
          <span>Facebook</span>
        </button>
        <button
          type="button"
          className="flex h-full w-full items-center justify-center gap-3 border p-1 text-base text-beamin"
        >
          <GoogleOutlined aria-hidden="true" />
          <span>Google</span>
        </button>
      </div>
      <div className="flex items-center justify-center gap-1">
        <span className="text-gray-600">Bạn mới biết đến Baemin?</span>
        <Link className="cursor-pointer text-beamin" href="/register">
          Đăng kí
        </Link>
      </div>
    </div>
  );
};

export default Page;
