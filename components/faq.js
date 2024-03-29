import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How can coaching help me?",
    answer:
      "Coaching can help you clarify goals and identify managable steps to acheiving them. It can help you understand ways you may be blocking yourself and show you strategies you can use to overcome blocks to your success.",
  },
  {
    question: "How long do I need to work with coach?",
    answer:
      "Number of sessions you may need varies, depending on where you are and what you want to acheive",
  },
  // {
  //   question: "What is your refund policy? ",
  //   answer:
  //     "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  // },
  // {
  //   question: "Do you offer technical support? ",
  //   answer:
  //     "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  // },
];
