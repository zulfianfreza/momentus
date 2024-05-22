import Container from "@/components/common/container";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <div className=" flex flex-col w-full items-center justify-center my-10">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">
            Privacy Policy
          </h1>
        </div>
        <div className=" w-full lg:max-w-2xl flex flex-col gap-4 mt-10">
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Encryption</h1>
            <p>
              Every sensitive data is transmitted using the SSL 256 bit
              encryption level, one of the safest encryption standards. The
              entirety of your data will be encrypted and saved in our data
              server and station. Datengdong had also obtained verification from
              Google Trust Services LLC with the cipher suite AES-256. However,
              just like any other system, safety is the responsibility of the
              user and provider. Please use strong passwords and do not disclose
              it with anybody else.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Data Center</h1>
            <p>
              Datengdong is hosted at Singapore in order to provide the best
              safety procedure as well as being well adjusted to the meticulous
              standards and regulations.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Back-up dan Review</h1>
            <p>
              Our data station is backed-up automatically, so you don’t have to
              worry about losing data. We also review the server, data station
              and the application in every quarter so that every finding can be
              followed up immediately.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Account Information</h1>
            <p>
              All of your sensitive data including your billing is secured and
              encrypted with the best safety standard. Datengdong and every team
              member cannot access the information that you’ve entered or
              uploaded. We have a very safe internal procedure that will prevent
              employees or other administrators from reaching your account.
              Datengdong also documents and inspect your account’s history
              periodically to make sure that everything’s safe.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Disclosures</h1>
            <p>
              We improve our products and advertising by using other service to
              see how you use our website. By using our site, you agree that we
              and other service can collect and use this data.
            </p>
            <p>
              We partner with Google and Microsoft to capture how you use and
              interact with our website through behavioral metrics, heatmaps,
              and session replay to improve and market our products/services.
              Website usage data is captured using first and third-party cookies
              and other tracking technologies to determine the popularity of
              products/services and online activity. Additionally, we use this
              information for site optimization, fraud/security purposes, and
              advertising. For more information about how Microsoft collects and
              uses your data, visit the Microsoft Privacy Statement.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Got More Questions?</h1>
            <p>
              Are you still worried, confused or curious? Contact us now on
              WhatsApp and we’ll get back to you as soon as possible.)
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
