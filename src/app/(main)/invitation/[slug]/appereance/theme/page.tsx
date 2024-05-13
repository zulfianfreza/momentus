import { Button } from "@/components/ui/button";
import { SIDEBAR_MENU } from "@/constant/common.constant";
import { THEME_FAKER } from "@/constant/faker.constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";

type TPageParams = {
  searchParams: {
    plan: string | undefined;
  };
};

export default function ThemePage({ searchParams }: TPageParams) {
  const plan = searchParams.plan || "all";

  const listTheme =
    plan === "all"
      ? THEME_FAKER
      : THEME_FAKER.filter((theme) => theme.plan === plan);
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Tema</h1>

      <div className=" mt-4 flex gap-2">
        <Button
          size="sm"
          variant={plan === "all" ? "default" : "outline"}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=all">
            All
            <div
              className={cn(
                " flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white",
                { "bg-white text-pink-600": plan === "all" }
              )}
            >
              {THEME_FAKER.length}
            </div>
          </Link>
        </Button>
        <Button
          size="sm"
          variant={plan === "emberglow" ? "default" : "outline"}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=emberglow">
            Emberglow
            <div
              className={cn(
                " flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white",
                { "bg-white text-pink-600": plan === "emberglow" }
              )}
            >
              {THEME_FAKER.filter((theme) => theme.plan === "emberglow").length}
            </div>
          </Link>
        </Button>
        <Button
          size="sm"
          variant={plan === "moonbeam" ? "default" : "outline"}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=moonbeam">
            Moonbeam
            <div
              className={cn(
                " flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white",
                { "bg-white text-pink-600": plan === "moonbeam" }
              )}
            >
              {THEME_FAKER.filter((theme) => theme.plan === "moonbeam").length}
            </div>
          </Link>
        </Button>
        {/* <Button
          size="sm"
          variant={plan === "eksklusif" ? "default" : "outline"}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=eksklusif">
            Eksklusif
            <div
              className={cn(
                " flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white",
                { "bg-white text-pink-600": plan === "eksklusif" }
              )}
            >
              {THEME_FAKER.filter((theme) => theme.plan === "eksklusif").length}
            </div>
          </Link>
        </Button> */}
        <Button
          size="sm"
          variant={plan === "stardust" ? "default" : "outline"}
          className={cn(" relative gap-2 overflow-hidden", {
            "bg-gradient-to-r from-indigo-800 to-indigo-950":
              plan === "stardust",
          })}
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=stardust">
            Stardust
            <div
              className={cn(
                " z-[2] flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white",
                {
                  " bg-white text-pink-600": plan === "stardust",
                }
              )}
            >
              {THEME_FAKER.filter((theme) => theme.plan === "stardust").length}
            </div>
            {plan === "stardust" && (
              <HiSparkles
                className=" absolute rotate-[190deg] -right-2 -bottom-1 text-yellow-300"
                size={32}
              />
            )}
          </Link>
        </Button>
      </div>

      <div className=" mt-4 grid grid-cols-2 gap-4">
        {listTheme.map((theme, i) => (
          <div className=" rounded-lg flex flex-col gap-2 border p-4" key={i}>
            <div className=" relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                fill
                alt=""
                className=" object-cover object-center"
                src={theme.thumbnail}
              />
            </div>
            <p className=" text-sm text-neutral-900 text-center">
              {theme.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
