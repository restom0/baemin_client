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
      setError("Vui long nhap day du thong tin.");
      return;
    }
    if (password !== reTypePassword) {
      setError("Mat khau khong khop.");
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
      setError("Khong the dang ki. Vui long thu lai.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-28 w-1/3  bg-white border rounded-2xl flex flex-col p-5 gap-5 pb-8">
        <div className="flex justify-center items-center w-full text-beamin font-semibold text-[26px]">
          Đăng Kí
        </div>
        <div className="flex flex-row w-full gap-2">
          <Input
            placeholder="Họ "
            className="h-[40px]"
            data-cy="register-last-name"
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <Input
            placeholder="Tên"
            className="h-[40px]"
            data-cy="register-first-name"
            onChange={(e) => setFirst_Name(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input
            placeholder="Tên đăng nhập"
            className="h-[40px]"
            data-cy="register-username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input
            placeholder="Số điện thoại"
            className="h-[40px]"
            data-cy="register-phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input
            placeholder="Email"
            className="h-[40px]"
            data-cy="register-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ">
          <Input.Password
            placeholder="Mật khẩu"
            className="h-[40px]"
            data-cy="register-password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ">
          <Input.Password
            placeholder="Nhập lại mật khẩu"
            className="h-[40px]"
            data-cy="register-confirm-password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setReTypePassword(e.target.value)}
          />
        </div>
        {error && (
          <div className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}
        <div className="flex flex-col w-full">
          <button
            className="w-full h-[40px] uppercase text-white bg-beamin rounded-lg"
            data-cy="register-submit"
            disabled={loading}
            onClick={handleRegister}
          >
            {loading ? "Dang ki..." : "Đăng Ký"}
          </button>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-gray-600">Bạn đã có tài khoản?</span>
          <Link className="text-beamin cursor-pointer" href={"/login"}>
            {" "}
            Đăng nhập
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page;
