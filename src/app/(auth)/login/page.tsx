import LoginForm from './_components/login-form';

export default function LoginPage() {
  return (
    <div className="">
      <div className=" fixed right-0 h-screen w-1/2 p-2 pl-0">
        <div className=" h-full w-full overflow-hidden rounded-xl bg-primary-100/50"></div>
      </div>
      <LoginForm />
    </div>
  );
}
