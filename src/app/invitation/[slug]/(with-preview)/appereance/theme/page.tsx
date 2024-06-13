'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import { Button } from '@/components/ui/button';
import { THEME_FAKER } from '@/constant/faker.constant';
import { cn } from '@/lib/utils';
import { TInvitation, TTheme } from '@/types/invitation.type';
import { getInvitationFaker } from '@/utils/faker';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { HiSparkles } from 'react-icons/hi2';

type TPageParams = {
  searchParams: {
    plan: string | undefined;
  };
  params: {
    slug: string;
  };
};

export default function ThemePage({ searchParams, params }: TPageParams) {
  const plan = searchParams.plan || 'all';
  const invitationFaker = getInvitationFaker(params.slug);

  const listTheme =
    plan === 'all'
      ? THEME_FAKER
      : THEME_FAKER.filter((theme) => theme.plan.name.toLowerCase() === plan);

  const handleChangeTheme = useCallback(
    (theme: TTheme) => {
      if (invitationFaker) {
        const invitationStyle: TInvitation = {
          ...invitationFaker,
          theme,
        };
        const iframe = document.getElementById(
          'preview-page',
        ) as HTMLIFrameElement;

        if (!iframe) return;

        iframe.contentWindow?.postMessage(
          {
            type: 'invitation-style-updated',
            invitationStyle,
          },
          '*',
        );
      }
    },
    [invitationFaker],
  );

  return (
    <div className=" w-full p-6">
      <HeadingConfigurationSection
        title="Tema"
        subtitle="Pilih tema pernikahan yang akan membuat undangan Anda memukau dan
          berkesan."
      />
      <div className=" mt-4 flex gap-2">
        <Button
          size="sm"
          variant={plan === 'all' ? 'default' : 'outline'}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=all">
            All
            <div
              className={cn(
                ' flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white',
                { 'bg-white text-pink-600': plan === 'all' },
              )}
            >
              {THEME_FAKER.length}
            </div>
          </Link>
        </Button>
        <Button
          size="sm"
          variant={plan === 'fair' ? 'default' : 'outline'}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=fair">
            Fair
            <div
              className={cn(
                ' flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white',
                { 'bg-white text-pink-600': plan === 'fair' },
              )}
            >
              {
                THEME_FAKER.filter(
                  (theme) => theme.plan.name.toLowerCase() === 'fair',
                ).length
              }
            </div>
          </Link>
        </Button>
        <Button
          size="sm"
          variant={plan === 'splendid' ? 'default' : 'outline'}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=splendid">
            Splendid
            <div
              className={cn(
                ' flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white',
                { 'bg-white text-pink-600': plan === 'splendid' },
              )}
            >
              {
                THEME_FAKER.filter(
                  (theme) => theme.plan.name.toLowerCase() === 'splendid',
                ).length
              }
            </div>
          </Link>
        </Button>
        <Button
          size="sm"
          variant={plan === 'rarely' ? 'default' : 'outline'}
          className={cn(' relative gap-2 overflow-hidden', {
            'bg-gradient-to-r from-indigo-800 to-indigo-950': plan === 'rarely',
          })}
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=rarely">
            Rarely
            <div
              className={cn(
                ' z-[2] flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white',
                {
                  ' bg-white text-pink-600': plan === 'rarely',
                },
              )}
            >
              {
                THEME_FAKER.filter(
                  (theme) => theme.plan.name.toLowerCase() === 'rarely',
                ).length
              }
            </div>
            {plan === 'rarely' && (
              <HiSparkles
                className=" absolute -bottom-1 -right-2 rotate-[190deg] text-yellow-300"
                size={32}
              />
            )}
          </Link>
        </Button>
      </div>

      <div className=" mt-4 grid grid-cols-2 gap-4">
        {listTheme.map((theme, i) => (
          <button
            className=" flex flex-col gap-2 rounded-lg border p-4"
            key={i}
            onClick={() => handleChangeTheme(theme)}
          >
            <div className=" relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                fill
                alt=""
                className=" object-cover object-center"
                src={theme.cover}
              />
            </div>
            <p className=" text-center text-sm text-neutral-900">
              {theme.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
