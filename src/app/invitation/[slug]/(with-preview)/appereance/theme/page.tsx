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
                { 'text-primary bg-white': plan === 'all' },
              )}
            >
              {THEME_FAKER.length}
            </div>
          </Link>
        </Button>
        <Button
          size="sm"
          variant={plan === 'basic' ? 'default' : 'outline'}
          className=" gap-2"
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=basic">
            Basic
            <div
              className={cn(
                ' flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white',
                { 'text-primary bg-white': plan === 'basic' },
              )}
            >
              {
                THEME_FAKER.filter(
                  (theme) => theme.plan.name.toLowerCase() === 'basic',
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
                { 'text-primary bg-white': plan === 'splendid' },
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
          variant={plan === 'luxury' ? 'default' : 'outline'}
          className={cn(' relative gap-2 overflow-hidden', {
            'bg-gradient-to-r from-indigo-800 to-indigo-950': plan === 'luxury',
          })}
          asChild
        >
          <Link href="/invitation/xyz/appereance/theme?plan=luxury">
            Luxury
            <div
              className={cn(
                ' z-[2] flex aspect-square w-4 justify-center rounded-full bg-neutral-800 text-[10px] text-white',
                {
                  ' text-primary bg-white': plan === 'luxury',
                },
              )}
            >
              {
                THEME_FAKER.filter(
                  (theme) => theme.plan.name.toLowerCase() === 'luxury',
                ).length
              }
            </div>
            {plan === 'luxury' && (
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
          <div
            className=" flex flex-col items-center"
            key={i}
            onClick={() => handleChangeTheme(theme)}
          >
            <button className=" relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                fill
                alt=""
                className=" object-cover object-center"
                src={theme.cover}
              />
            </button>
            <p className=" mt-2 text-center text-sm text-neutral-900">
              {theme.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
