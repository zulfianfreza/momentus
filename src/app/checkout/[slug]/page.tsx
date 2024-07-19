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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Brush2, LikeShapes } from 'iconsax-react';
import { useCallback, useMemo, useState } from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { LuArrowLeft, LuCheck, LuMinus, LuPlus } from 'react-icons/lu';
import { PiHourglass, PiLightning, PiSpiral } from 'react-icons/pi';

export default function CheckoutPage() {
  // state
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [showSelectFilter, setShowSelectFilter] = useState<boolean>(false);
  const PLANS = [
    {
      name: 'Fair',
      description: 'Solusi terjangkau untuk semua',
      price: '99.000',
      icon: PiLightning,
      features: [
        { label: 'All in trial' },
        { label: 'Kuota WA Blast 50' },
        { label: 'Embedded video (prewedd)' },
        { label: 'Gift' },
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
        { label: 'Kuota WA Blast 100' },
        { label: 'Hide Watermark' },
        { label: 'Love Story Section' },
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
        { label: 'Kuota WA Blast 300' },
        { label: 'Live Streaming Section' },
        { label: 'Filter Instagram' },
        { label: 'Dresscode' },
        { label: 'Gallery max 20' },
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
    <>
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
                    <div className=" flex h-full w-full flex-col gap-8 rounded-2xl border p-6">
                      <div className="flex flex-col gap-6">
                        <div className=" space-y-4">
                          <div className=" flex items-center justify-between">
                            <PiHourglass size={24} />
                          </div>
                          <div className="">
                            <h1 className=" text-lg font-semibold">
                              Free Trial
                            </h1>
                            <p className=" text-sm text-neutral-500">
                              Uji coba gratis, nikmatilah fitur kami
                            </p>
                          </div>
                          <h1 className=" text-3xl font-bold">Free</h1>
                          <div className=" flex flex-col gap-2">
                            {[
                              'Masa aktif 3 hari',
                              'Cover',
                              'Gallery max 2',
                              'Countdown',
                              'Protocol',
                              'Wedding Wish',
                              'Closing',
                            ].map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2"
                              >
                                <LuCheck className=" text-primary" />
                                <p className=" text-sm">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button
                        className=" mt-auto w-full"
                        variant="outline"
                        disabled
                      >
                        Current Plan
                      </Button>
                    </div>
                  </CarouselItem>
                  {PLANS.map((plan, index) => (
                    <CarouselItem
                      key={index}
                      className=" md:basis-1/2 lg:basis-1/3"
                    >
                      <div
                        className={cn(
                          ' relative flex h-full w-full flex-col gap-8 rounded-2xl border p-6',
                          {
                            'bg-primary border-none text-white': isRecommended(
                              plan.name,
                            ),
                          },
                        )}
                      >
                        <div className="flex flex-col gap-6">
                          <div className=" space-y-4">
                            <div className=" flex items-center justify-between">
                              <plan.icon size={24} />
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
                            <h1 className=" text-3xl font-bold">
                              Rp {plan.price}
                            </h1>

                            <div className=" flex flex-col gap-2">
                              {plan.features.map((feature, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2"
                                >
                                  <LuCheck
                                    className={cn(' text-primary', {
                                      'text-white':
                                        plan.name.toLowerCase() === 'medieval',
                                    })}
                                  />
                                  <p className=" text-sm">{feature.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className=" mt-auto">
                          <Button
                            className={cn(' w-full', {
                              'text-primary bg-white hover:bg-white/90':
                                isRecommended(plan.name),
                            })}
                            onClick={() => handleSelectPlan(plan.name)}
                          >
                            {selectedPlan === plan.name ? 'Dipilih' : 'Pilih'}
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <div className=" flex h-full w-full flex-col gap-8 rounded-2xl border p-6">
                      <div className="flex flex-col gap-6">
                        <div className=" space-y-4">
                          <div className=" flex items-center justify-between">
                            <Brush2 size={24} />
                          </div>
                          <div className="">
                            <h1 className=" text-lg font-semibold">Custom</h1>
                            <p className=" text-sm text-neutral-500">
                              Personalisasi Tanpa Batas
                            </p>
                          </div>
                          <h1 className=" text-3xl font-bold">Custom</h1>
                          <div className=" flex flex-col gap-2">
                            {[
                              'All in Luxury + Addition section',
                              'Custom Design',
                              'Custom Domain',
                              'Kuota WA Blast 500',
                              'Personal Assistant Support',
                            ].map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2"
                              >
                                <LuCheck className=" text-primary" />
                                <p className=" text-sm">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button className=" mt-auto w-full">Contact Us</Button>
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
                    <p className="">Gallery</p>
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
                    <h1 className="">Rp. 1.000/photo</h1>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <p className="">Embedded Video (prewed)</p>
                  </div>
                  <h1 className="">Rp. 20.000</h1>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <p className="">Hide Watermark</p>
                  </div>
                  <h1 className="">Rp. 20.000</h1>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <p className="">Dresscode</p>
                  </div>
                  <h1 className="">Rp. 20.000</h1>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-1 items-center gap-2">
                    <Switch />
                    <p className="">
                      External Link (Live Streaming & Filter Instagram)
                    </p>
                  </div>
                  <h1 className="">Rp. 20.000</h1>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <p className="">Gift/Angpao</p>
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

            <div className=" flex items-center justify-between">
              <h1 className=" text-lg font-medium">Filter Instagram</h1>
              <Button onClick={() => setShowSelectFilter((prev) => !prev)}>
                Pilih Filter
              </Button>
            </div>
          </div>
          <div className=" sticky top-8 col-span-3 lg:col-span-1">
            <div className="flex gap-2">
              <Input placeholder="Voucher code" />
              <Button>Apply</Button>
            </div>
            <p className=" text-primary mt-1 text-sm underline">Lihat promo</p>
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
                  <p className=" text-primary text-xl font-semibold">
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
                <span className=" text-primary font-semibold">
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
        <div className="container mx-auto flex h-20 w-full items-center">
          <p className=" text-sm">Copyright &copy; Majoola Invitation 2024.</p>
        </div>
      </div>

      <Dialog
        // open
        open={showSelectFilter}
        onOpenChange={setShowSelectFilter}
      >
        <DialogContent className=" max-w-4xl p-0">
          <DialogHeader className=" p-6 pb-0">
            <DialogTitle>Filter Instagram</DialogTitle>
          </DialogHeader>
          <div className=" max-h-[70vh] overflow-y-scroll p-6 pt-0">
            <div className="grid grid-cols-4 gap-4 ">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className=" w-full"
                >
                  <div className=" aspect-[9/16] w-full rounded-xl bg-[url(/images/filter/001.png)] bg-cover bg-center"></div>
                </div>
              ))}
            </div>

            <div className=" mt-4 flex flex-col gap-2">
              <Label>Note</Label>
              <Textarea placeholder="Sekar & Hilman" />
              <p className=" text-xs text-neutral-500">
                Isi nama kamu dan pasangan kamu. Contoh: Sekar & Hilman
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
