'use client';

import PricingPage from '@/app/(main)/pricing/page';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Brush2, LikeShapes } from 'iconsax-react';
import { useCallback, useMemo, useState } from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { LuArrowLeft, LuCheck, LuMinus, LuPlus } from 'react-icons/lu';
import { PiLightning, PiSpiral } from 'react-icons/pi';

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const PLANS = [
    {
      name: 'Fair',
      description: 'Solusi terjangkau untuk semua',
      price: '99.000',
      icon: PiLightning,
      features: [
        { label: 'All in trial' },
        { label: 'Kuota 50 WA Blast' },
        { label: 'Embedded video (prewedd)' },
        { label: 'Gallery max 6' },
      ],
    },
    {
      name: 'Medieval',
      price: '149.000',
      icon: LikeShapes,
      description: 'Paling rekomendasi buat kamu',
      features: [
        { label: 'All in fair' },
        { label: 'Kuota WA Blast 50' },
        { label: 'Embedded video (prewed)' },
        { label: 'Gallery max 12' },
      ],
    },
    {
      name: 'Luxury',
      price: '249.000',
      icon: IoDiamondOutline,
      description: 'Kemewahan tanpa batas',
      features: [
        { label: 'All in medieval' },
        { label: 'Kuota WA Blast 100' },
        { label: 'Gallery max 18' },
      ],
    },
  ];

  const handleSelectPlan = useCallback((plan: string) => {
    setSelectedPlan(plan);
  }, []);

  const isRecommended = useCallback((plan: string) => {
    if (plan.toLowerCase() === 'medieval') {
      return true;
    }
    return false;
  }, []);

  return (
    <div className=" min-h-screen">
      <div className=" container mx-auto flex h-20 w-full items-center">
        <LuArrowLeft />
      </div>
      <div className="container mx-auto grid w-full grid-cols-3 items-start gap-16">
        <div className=" col-span-3 space-y-8 lg:col-span-2">
          <div className="">
            <h1 className=" text-lg font-medium">Tentukan plan mu.</h1>
            <Carousel
              opts={{
                align: 'start',
              }}
              className="mt-4 w-full"
            >
              <CarouselContent className=" items-stretch">
                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                  <div className=" h-full w-full rounded-2xl border p-6">
                    <div className=" flex flex-col gap-4">
                      <div className=" flex items-center justify-between">
                        <PiSpiral size={24} />
                      </div>
                      <div className="">
                        <h1 className=" text-lg font-semibold">Free Trial</h1>
                        <p className=" text-sm text-neutral-500">
                          Uji coba gratis, nikmatilah fitur kami
                        </p>
                      </div>
                    </div>
                    <h1 className=" mt-4 text-3xl font-bold">Free</h1>
                    <Button
                      className=" mt-4 w-full"
                      variant="outline"
                      disabled
                    >
                      Current Plan
                    </Button>
                    <div className=" mt-8 flex flex-col gap-2">
                      {['Masa aktif 3 hari', 'Gallery max 2'].map(
                        (feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2"
                          >
                            <LuCheck className=" text-pink-600" />
                            <p className=" text-sm">{feature}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </CarouselItem>
                {PLANS.map((plan, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className={cn(' h-full w-full rounded-2xl border p-6', {
                        'border-none bg-pink-600 text-white': isRecommended(
                          plan.name,
                        ),
                      })}
                    >
                      <div className=" space-y-4">
                        <div className=" flex items-center justify-between">
                          <plan.icon size={24} />
                          {/* {isRecommended(plan.name) && (
                            <Button
                              className=" bg-yellow-400"
                              size="sm"
                            >
                              Recommended
                            </Button>
                          )} */}
                        </div>
                        <div className="">
                          <h1 className=" text-lg font-semibold">
                            {plan.name}
                          </h1>
                          <p
                            className={cn(' text-sm text-neutral-500', {
                              'text-white': isRecommended(plan.name),
                            })}
                          >
                            {plan.description}
                          </p>
                        </div>
                      </div>
                      <h1 className=" mt-4 text-3xl font-bold">
                        Rp {plan.price}
                      </h1>
                      <Button
                        className={cn(' mt-4 w-full', {
                          'bg-white text-pink-600 hover:bg-white/90':
                            isRecommended(plan.name),
                        })}
                        onClick={() => handleSelectPlan(plan.name)}
                      >
                        {selectedPlan === plan.name ? 'Dipilih' : 'Pilih'}
                      </Button>
                      <div className=" mt-8 flex flex-col gap-2">
                        {plan.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2"
                          >
                            <LuCheck
                              className={cn(' text-pink-600', {
                                'text-white':
                                  plan.name.toLowerCase() === 'medieval',
                              })}
                            />
                            <p className=" text-sm">{feature.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                  <div className=" h-full w-full rounded-2xl border p-6">
                    <div className="flex flex-col gap-4">
                      <div className=" flex items-center justify-between">
                        <Brush2 size={24} />
                      </div>
                      <div className="">
                        <h1 className=" text-lg font-semibold">Custom</h1>
                        <p className=" text-sm text-neutral-500">
                          Personalisasi Tanpa Batas
                        </p>
                      </div>
                    </div>
                    <h1 className=" mt-4 text-3xl font-bold">Custom</h1>
                    <Button className=" mt-4 w-full">Contact Us</Button>
                    <div className=" mt-8 flex flex-col gap-2">
                      {['Masa aktif 3 hari', 'Gallery max 2'].map(
                        (feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2"
                          >
                            <LuCheck className=" text-pink-600" />
                            <p className=" text-sm">{feature}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className=" !-left-4" />
              <CarouselNext className=" !-right-4" />
            </Carousel>
          </div>
          <div className=" ">
            <h1 className=" text-lg font-medium">Add Ons</h1>
            <div className="mt-4 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch />
                  <p className="">Custom Lagu</p>
                </div>
                <h1 className="">Rp. 20.000</h1>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch />
                  <p className="">External Link</p>
                </div>
                <h1 className="">Rp. 20.000</h1>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch />
                  <p className="">WA Blast</p>
                </div>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="flex items-center gap-1">
                    <Button
                      className=" rounded-full"
                      size="icon-sm"
                      variant="outline"
                    >
                      <LuMinus />
                    </Button>
                    <Input
                      className=" h-12 w-20 rounded-full text-center"
                      value={0}
                    />
                    <Button
                      className=" rounded-full"
                      size="icon-sm"
                      variant="outline"
                    >
                      <LuPlus />
                    </Button>
                  </div>
                  <h1 className="">Rp. 1.000/pesan</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" sticky top-8 col-span-3 lg:col-span-1">
          <div className="flex gap-2">
            <Input placeholder="Voucher code" />
            <Button>Apply</Button>
          </div>
          <p className=" mt-1 text-sm text-pink-600 underline">Lihat promo</p>
          <div className=" mt-4 rounded-xl border p-6">
            <div className=" flex flex-col gap-2">
              <h1 className=" text-lg font-medium">Order Summary</h1>
              <div className="flex items-center justify-between">
                <p className=" text-sm text-neutral-500">Plan</p>
                <p className=" text-sm font-medium">Rp 99.000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className=" text-sm text-neutral-500">Wa Blast (x100)</p>
                <p className=" text-sm font-medium">Rp 100.000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className=" text-sm text-neutral-500">Custom Lagu</p>
                <p className=" text-sm font-medium">Rp 20.000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className=" text-sm text-neutral-500">Sub Total</p>
                <p className=" text-sm font-medium">Rp 300.000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className=" text-sm text-neutral-500">Potongan</p>
                <p className=" text-sm font-medium">Rp 50.000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className=" text-sm text-neutral-500">Service fee</p>
                <p className=" text-sm font-medium">Rp 10.000</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <p className=" text-xl">Total</p>
                <p className=" text-xl font-semibold text-pink-600">
                  Rp 250.000
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className=" font-normal"
            >
              Saya setuju dengan{' '}
              <span className=" font-semibold text-pink-600">
                Terms & Conditions
              </span>
            </Label>
          </div>
          <Button
            className=" mt-4 w-full rounded-xl"
            size="lg"
          >
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
