"use client";

import { register } from "@/apis/fetchApi";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page: React.FC = () => {
  const router = useRouter();
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");

  const handleNavigate = () => {
    router.push("/login");
  };

  const handleRegister = async () => {
    setError("");
    if (!first_name || !last_name || !username || !phone || !email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (password !== reTypePassword) {
      setError("Mật khẩu không khớp.");
      return;
    }

    setLoading(true);
    try {
      const result = await register({
        full_name: `${last_name} ${first_name}`.trim(),
        username: username.trim(),
        phone: phone.trim(),
        email: email.trim(),
        password,
      });
      if (typeof result === "string") {
        setError(result);
        return;
      }

      handleNavigate();
    } catch {
      setError("Không thể đăng kí. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <div className="mt-28 flex w-1/3 flex-col gap-5 rounded-2xl border bg-white p-5 pb-8">
      <h1 className="m-0 flex w-full items-center justify-center text-[26px] font-semibold text-beamin">
        Đăng kí
      </h1>
      <form className="contents" onSubmit={handleSubmit}>
        <div className="flex w-full flex-row gap-2">
          <label className="ds-visually-hidden" htmlFor="register-last-name">
            Họ
          </label>
          <Input
            id="register-last-name"
            placeholder="Họ"
            className="h-[40px]"
            data-cy="register-last-name"
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <label className="ds-visually-hidden" htmlFor="register-first-name">
            Tên
          </label>
          <Input
            id="register-first-name"
            placeholder="Tên"
            className="h-[40px]"
            data-cy="register-first-name"
            onChange={(e) => setFirst_Name(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <label className="ds-visually-hidden" htmlFor="register-username">
            Tên đăng nhập
          </label>
          <Input
            id="register-username"
            placeholder="Tên đăng nhập"
            className="h-[40px]"
            data-cy="register-username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <label className="ds-visually-hidden" htmlFor="register-phone">
            Số điện thoại
          </label>
          <Input
            id="register-phone"
            placeholder="Số điện thoại"
            className="h-[40px]"
            data-cy="register-phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <label className="ds-visually-hidden" htmlFor="register-email">
            Email
          </label>
          <Input
            id="register-email"
            placeholder="Email"
            className="h-[40px]"
            data-cy="register-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="ds-visually-hidden" htmlFor="register-password">
            Mật khẩu
          </label>
          <Input.Password
            id="register-password"
            placeholder="Mật khẩu"
            className="h-[40px]"
            data-cy="register-password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone aria-hidden="true" /> : <EyeInvisibleOutlined aria-hidden="true" />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="ds-visually-hidden" htmlFor="register-confirm-password">
            Nhập lại mật khẩu
          </label>
          <Input.Password
            id="register-confirm-password"
            placeholder="Nhập lại mật khẩu"
            className="h-[40px]"
            data-cy="register-confirm-password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone aria-hidden="true" /> : <EyeInvisibleOutlined aria-hidden="true" />
            }
            onChange={(e) => setReTypePassword(e.target.value)}
          />
        </div>
        {error && (
          <div className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}
        <div className="flex w-full flex-col">
          <button
            className="h-[40px] w-full rounded-lg bg-beamin uppercase text-white"
            data-cy="register-submit"
            disabled={loading}
            type="submit"
          >
            {loading ? "Đang đăng kí..." : "Đăng ký"}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-1">
        <span className="text-gray-600">Bạn đã có tài khoản?</span>
        <Link className="cursor-pointer text-beamin" href="/login">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Page;
