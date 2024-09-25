"use client";

import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const key = "6LdgLDQqAAAAAFmzp2u_r8MmOWf1ypsH_gnT43V-";
  const [captcha, setCaptcha] = useState(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    field: "Select Industry",
    services: "Select Services",
    message: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://api.nobleaspect.com/api/inquiry/inquiries`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSuccessMessage("Inquiry sent successfully!");
      setError(null);
      // Clear form after successful submission
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        field: "Select Industry",
        service: "Select Services",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send inquiry. Please try again later.");
      setSuccessMessage(null);
    }
  };
  const handleMouseEnter = (index) => {
    setHoveredDiv(index);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataFeatures = async () => {
    try {
      const response = await axios.get(`https://api.nobleaspect.com/api/service/list`);
      setServices(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFeatures();
  }, []);

  const [caseStudy, setCaseStudy] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.nobleaspect.com/api/caseStudy/list`);
      setCaseStudy(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [featuresSection, setFeaturesSection] = useState([
    {
      id: 0,
      icon: () => (
        <>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.79661 19.8373L10.2649 24.1125C10.6124 24.7146 10.4043 25.4915 9.80221 25.8391C9.20016 26.1867 8.42321 25.9786 8.07557 25.3765L5.2861 20.5449C6.12317 20.3108 6.95749 20.0641 7.79661 19.8373ZM25.2724 15.3763C25.1327 15.2961 25.0846 15.1178 25.1649 14.9781C25.2451 14.8384 25.4234 14.7902 25.5631 14.8705L28.2507 16.4222C28.3904 16.5025 28.4385 16.6808 28.3583 16.8205C28.278 16.9601 28.0997 17.0083 27.96 16.928L25.2724 15.3763ZM23.8361 8.42207C23.7558 8.56176 23.5775 8.60992 23.4379 8.52965C23.2982 8.44938 23.25 8.27108 23.3303 8.13139L24.882 5.4438C24.9622 5.30412 25.1405 5.25595 25.2802 5.33622C25.4199 5.4165 25.4681 5.5948 25.3878 5.73449L23.8361 8.42207ZM25.994 11.6028C25.8379 11.6445 25.6775 11.5517 25.6358 11.3957C25.5942 11.2396 25.6869 11.0791 25.843 11.0375L28.8406 10.2343C28.9966 10.1925 29.1571 10.2853 29.1987 10.4414C29.2405 10.5975 29.1477 10.7579 28.9916 10.7996L25.994 11.6028ZM17.6135 4.03058C17.0168 4.19048 16.6594 4.80947 16.8193 5.40619L20.9953 20.9913C21.1552 21.588 21.7741 21.9454 22.3709 21.7855C22.9676 21.6256 23.3249 21.0066 23.1651 20.4099L18.9891 4.82476C18.8293 4.2281 18.2102 3.87073 17.6135 4.03058ZM9.14333 18.8958L7.6029 13.147C6.05778 13.6257 4.47352 13.9722 2.91071 14.3909C1.37971 14.8011 0.462722 16.3894 0.900651 18.0236C1.33858 19.6579 2.92676 20.5748 4.45776 20.1646C6.02063 19.7458 7.56575 19.2537 9.14333 18.8958ZM8.16053 12.967C12.4371 11.5283 15.2282 9.12256 16.6215 6.93191L20.0612 19.7688C17.7592 18.5684 14.1391 17.8806 9.7162 18.7729L8.16053 12.967ZM21.1688 10.6952L22.6692 10.7085C22.8027 10.7097 22.915 10.7966 22.9495 10.9257L23.5446 13.1463C23.5791 13.2752 23.5254 13.4067 23.4103 13.4745L22.1176 14.2362L21.1688 10.6952Z"
              fill="#067A49"
            />
          </svg>
        </>
      ),
      title: "Digital Marketing",
      description:
        "Discover the power of strategic digital marketing with Noble Aspect, LLC. We specialize in crafting custom strategies that elevate your brand's online presence.",
    },
    {
      id: 1,
      icon: () => (
        <>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_136_2839)">
              <path
                d="M16.8053 13.0629L15 10.0049L13.1947 13.0629C13.1395 13.1557 13.052 13.2249 12.9491 13.2573C12.8461 13.2897 12.7347 13.2831 12.6363 13.2387L9.81445 11.973L10.9395 16.0236H19.0605L20.1855 11.973L17.3637 13.2422C17.2649 13.2863 17.1532 13.2924 17.0502 13.2593C16.9471 13.2262 16.8599 13.1563 16.8053 13.0629Z"
                fill="#067A49"
              />
              <path
                d="M15 4.89258C9.42656 4.89258 4.89258 9.42656 4.89258 15C4.89258 20.5734 9.42656 25.1074 15 25.1074C20.5734 25.1074 25.1074 20.5734 25.1074 15C25.1074 9.42656 20.5734 4.89258 15 4.89258ZM19.834 20.127C19.834 20.4378 19.7105 20.7358 19.4908 20.9556C19.271 21.1754 18.9729 21.2988 18.6621 21.2988H11.3379C11.0271 21.2988 10.729 21.1754 10.5092 20.9556C10.2895 20.7358 10.166 20.4378 10.166 20.127V18.6621C10.166 18.5456 10.2123 18.4338 10.2947 18.3514C10.3771 18.269 10.4889 18.2227 10.6055 18.2227H19.3945C19.5111 18.2227 19.6229 18.269 19.7053 18.3514C19.7877 18.4338 19.834 18.5456 19.834 18.6621V20.127ZM21.283 11.3086L19.8182 16.582C19.7924 16.6746 19.737 16.7562 19.6605 16.8144C19.584 16.8725 19.4906 16.9041 19.3945 16.9043H10.6055C10.5095 16.9042 10.4161 16.8727 10.3396 16.8146C10.2632 16.7565 10.2078 16.6751 10.1818 16.5826L8.71699 11.3092C8.69463 11.2288 8.69564 11.1436 8.7199 11.0637C8.74417 10.9839 8.79068 10.9126 8.854 10.8582C8.91731 10.8038 8.99481 10.7685 9.07743 10.7565C9.16005 10.7446 9.24436 10.7564 9.32051 10.7906L12.6375 12.2777L14.6215 8.91738C14.6603 8.85154 14.7157 8.79696 14.782 8.75905C14.8484 8.72113 14.9236 8.70119 15 8.70119C15.0764 8.70119 15.1516 8.72113 15.218 8.75905C15.2843 8.79696 15.3397 8.85154 15.3785 8.91738L17.3625 12.2777L20.6795 10.7906C20.7556 10.7564 20.84 10.7446 20.9226 10.7565C21.0052 10.7685 21.0827 10.8038 21.146 10.8582C21.2093 10.9126 21.2558 10.9839 21.2801 11.0637C21.3044 11.1436 21.3054 11.2288 21.283 11.3092V11.3086Z"
                fill="#067A49"
              />
              <path
                d="M11.0449 20.127C11.0449 20.2047 11.0758 20.2792 11.1307 20.3341C11.1857 20.3891 11.2602 20.4199 11.3379 20.4199H18.6621C18.7398 20.4199 18.8143 20.3891 18.8693 20.3341C18.9242 20.2792 18.9551 20.2047 18.9551 20.127V19.1016H11.0449V20.127Z"
                fill="#067A49"
              />
              <path
                d="M29.0895 12.7254C28.7965 12.2654 28.517 11.8313 28.4039 11.4082C28.2838 10.9588 28.3066 10.4273 28.3307 9.86484C28.3652 9.04922 28.4016 8.20605 27.992 7.49824C27.576 6.7793 26.8201 6.38496 26.0912 6.00937C25.5973 5.75273 25.1303 5.51074 24.8098 5.18906C24.4893 4.86738 24.2473 4.40156 23.9895 3.90762C23.6133 3.17871 23.2207 2.42402 22.5 2.00801C21.7928 1.59785 20.949 1.63477 20.1334 1.66934C19.5709 1.69336 19.0395 1.71621 18.59 1.59609C18.167 1.48301 17.7328 1.20469 17.2729 0.910547C16.575 0.462891 15.852 0 15 0C14.148 0 13.425 0.462891 12.7254 0.910547C12.2654 1.20352 11.8313 1.48301 11.4082 1.59609C10.957 1.71621 10.4297 1.69336 9.86484 1.66934C9.04922 1.63477 8.20605 1.59844 7.49824 2.00801C6.7793 2.42402 6.38496 3.17988 6.00937 3.90879C5.75273 4.40273 5.51074 4.86973 5.18906 5.19023C4.86738 5.51074 4.40156 5.75273 3.90762 6.01055C3.17871 6.38672 2.42402 6.7793 2.00801 7.5C1.59785 8.20723 1.63477 9.05098 1.66934 9.8666C1.69336 10.4291 1.71621 10.9605 1.59609 11.41C1.48301 11.833 1.20469 12.2672 0.910547 12.7271C0.462891 13.425 0 14.148 0 15C0 15.852 0.462891 16.575 0.910547 17.2746C1.20352 17.7346 1.48301 18.1687 1.59609 18.5918C1.71621 19.043 1.69336 19.5703 1.66934 20.1352C1.63477 20.9508 1.59844 21.7969 2.00801 22.5C2.42402 23.2189 3.17988 23.6133 3.90879 23.9889C4.40273 24.2455 4.86973 24.4875 5.19023 24.8092C5.51074 25.1309 5.75273 25.5967 6.01055 26.0906C6.38672 26.8213 6.7793 27.576 7.5 27.992C8.20723 28.4021 9.05098 28.3652 9.8666 28.3307C10.4291 28.3066 10.9605 28.2838 11.41 28.4039C11.833 28.517 12.2672 28.7953 12.7271 29.0895C13.425 29.5371 14.148 30 15 30C15.852 30 16.575 29.5371 17.2746 29.0895C17.7346 28.7965 18.1687 28.517 18.5918 28.4039C19.0412 28.2838 19.5727 28.3066 20.1352 28.3307C20.9508 28.3652 21.7939 28.4016 22.5018 27.992C23.2207 27.576 23.615 26.8201 23.9906 26.0912C24.2473 25.5973 24.4893 25.1303 24.8109 24.8098C25.1326 24.4893 25.5984 24.2473 26.0924 23.9895C26.8213 23.6133 27.576 23.2207 27.992 22.5C28.4021 21.7928 28.3652 20.949 28.3307 20.1334C28.3066 19.5709 28.2838 19.0395 28.4039 18.59C28.517 18.167 28.7953 17.7328 29.0895 17.2729C29.5371 16.575 30 15.852 30 15C30 14.148 29.5371 13.425 29.0895 12.7254ZM15 25.9863C8.94199 25.9863 4.01367 21.058 4.01367 15C4.01367 8.94199 8.94199 4.01367 15 4.01367C21.058 4.01367 25.9863 8.94199 25.9863 15C25.9863 21.058 21.058 25.9863 15 25.9863Z"
                fill="#067A49"
              />
            </g>
            <defs>
              <clipPath id="clip0_136_2839">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </>
      ),
      title: "Branding",
      description:
        "At Noble Aspect, LLC, we understand that a strong brand is the foundation of success. Our branding services are designed to create a powerful and authentic identity that resonates with your audience.",
    },
    {
      id: 2,
      icon: () => (
        <>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.9318 12.2728H26.242C26.1849 10.0254 25.4517 7.84742 24.1382 6.02301C22.8246 4.1986 20.9916 2.81248 18.8784 2.04549H24.5939C24.6768 2.36685 24.8742 2.64692 25.1489 2.8332C25.4236 3.01947 25.7568 3.09917 26.086 3.05735C26.4153 3.01553 26.718 2.85506 26.9374 2.60602C27.1568 2.35699 27.2778 2.03648 27.2778 1.70458C27.2778 1.37268 27.1568 1.05218 26.9374 0.803139C26.718 0.554103 26.4153 0.393635 26.086 0.351814C25.7568 0.309993 25.4236 0.389691 25.1489 0.575968C24.8742 0.762245 24.6768 1.04231 24.5939 1.36367H16.3636V0.681855C16.3636 0.59144 16.3277 0.504729 16.2638 0.440796C16.1999 0.376863 16.1131 0.340946 16.0227 0.340946H13.9773C13.8869 0.340946 13.8001 0.376863 13.7362 0.440796C13.6723 0.504729 13.6364 0.59144 13.6364 0.681855V1.36367H5.40614C5.32316 1.04231 5.12583 0.762245 4.85114 0.575968C4.57644 0.389691 4.24324 0.309993 3.91398 0.351814C3.58473 0.393635 3.28203 0.554103 3.06262 0.803139C2.84322 1.05218 2.72217 1.37268 2.72217 1.70458C2.72217 2.03648 2.84322 2.35699 3.06262 2.60602C3.28203 2.85506 3.58473 3.01553 3.91398 3.05735C4.24324 3.09917 4.57644 3.01947 4.85114 2.8332C5.12583 2.64692 5.32316 2.36685 5.40614 2.04549H11.1215C9.00833 2.81248 7.17536 4.1986 5.86179 6.02301C4.54821 7.84742 3.81503 10.0254 3.75791 12.2728H3.06818C2.97777 12.2728 2.89106 12.3087 2.82713 12.3726C2.76319 12.4365 2.72728 12.5233 2.72728 12.6137V14.6591C2.72728 14.7495 2.76319 14.8363 2.82713 14.9002C2.89106 14.9641 2.97777 15 3.06818 15H5.11364C5.20405 15 5.29077 14.9641 5.3547 14.9002C5.41863 14.8363 5.45455 14.7495 5.45455 14.6591V12.6137C5.45455 12.5233 5.41863 12.4365 5.3547 12.3726C5.29077 12.3087 5.20405 12.2728 5.11364 12.2728H4.4398C4.50821 9.76279 5.47338 7.36032 7.16045 5.50063C8.84752 3.64093 11.1449 2.44702 13.6364 2.13518V2.72731C13.6364 2.81772 13.6723 2.90444 13.7362 2.96837C13.8001 3.0323 13.8869 3.06822 13.9773 3.06822H16.0227C16.1131 3.06822 16.1999 3.0323 16.2638 2.96837C16.3277 2.90444 16.3636 2.81772 16.3636 2.72731V2.13518C18.8551 2.44702 21.1525 3.64093 22.8396 5.50063C24.5266 7.36032 25.4918 9.76279 25.5602 12.2728H24.8864C24.796 12.2728 24.7092 12.3087 24.6453 12.3726C24.5814 12.4365 24.5455 12.5233 24.5455 12.6137V14.6591C24.5455 14.7495 24.5814 14.8363 24.6453 14.9002C24.7092 14.9641 24.796 15 24.8864 15H26.9318C27.0222 15 27.1089 14.9641 27.1729 14.9002C27.2368 14.8363 27.2727 14.7495 27.2727 14.6591V12.6137C27.2727 12.5233 27.2368 12.4365 27.1729 12.3726C27.1089 12.3087 27.0222 12.2728 26.9318 12.2728Z"
              fill="#067A49"
            />
            <path
              d="M15.9868 4.62026C15.9524 4.55156 15.8959 4.49646 15.8263 4.4639C15.7568 4.43135 15.6782 4.42324 15.6035 4.44089C15.5287 4.45853 15.4621 4.50091 15.4145 4.56115C15.3668 4.62138 15.3409 4.69594 15.3409 4.77275V15.8216C15.3409 15.8876 15.3601 15.9522 15.3961 16.0075C15.4321 16.0628 15.4833 16.1065 15.5437 16.1332C15.8311 16.2582 16.0668 16.4784 16.2109 16.7567C16.355 17.035 16.3989 17.3545 16.3351 17.6614C16.2713 17.9683 16.1037 18.2438 15.8605 18.4416C15.6173 18.6394 15.3135 18.7474 15 18.7474C14.6866 18.7474 14.3827 18.6394 14.1395 18.4416C13.8963 18.2438 13.7288 17.9683 13.6649 17.6614C13.6011 17.3545 13.645 17.035 13.7891 16.7567C13.9333 16.4784 14.1689 16.2582 14.4564 16.1332C14.5167 16.1065 14.5679 16.0628 14.6039 16.0075C14.6399 15.9522 14.6591 15.8876 14.6591 15.8216V4.77275C14.6591 4.69594 14.6332 4.62138 14.5855 4.56115C14.5379 4.50091 14.4713 4.45853 14.3965 4.44089C14.3218 4.42324 14.2433 4.43135 14.1737 4.4639C14.1041 4.49646 14.0476 4.55156 14.0132 4.62026L7.53597 17.5748C7.51232 17.6222 7.5 17.6744 7.5 17.7273C7.5 17.7802 7.51232 17.8324 7.53597 17.8798L10.0165 22.8409H19.9835L22.464 17.8798C22.4877 17.8324 22.5 17.7802 22.5 17.7273C22.5 17.6744 22.4877 17.6222 22.464 17.5748L15.9868 4.62026Z"
              fill="#067A49"
            />
            <path
              d="M20.7955 23.5227H9.20456C9.01628 23.5227 8.86365 23.6753 8.86365 23.8636V25.9091C8.86365 26.0973 9.01628 26.25 9.20456 26.25H20.7955C20.9837 26.25 21.1364 26.0973 21.1364 25.9091V23.8636C21.1364 23.6753 20.9837 23.5227 20.7955 23.5227Z"
              fill="#067A49"
            />
            <path
              d="M9.88635 29.3182C9.88635 29.4087 9.92227 29.4954 9.9862 29.5593C10.0501 29.6232 10.1368 29.6592 10.2273 29.6592H19.7727C19.8631 29.6592 19.9498 29.6232 20.0138 29.5593C20.0777 29.4954 20.1136 29.4087 20.1136 29.3182V26.9319H9.88635V29.3182Z"
              fill="#067A49"
            />
          </svg>
        </>
      ),
      title: "Design",
      description:
        "Elevate your brand’s visual identity with our cutting-edge design services. At Noble Aspect, LLC, we create captivating, user-centred designs that not only look stunning but also drive engagement.",
    },
  ]);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#CBF8DA] w-full flex justify-center">
        <div className="absolute w-full h-full z-0">
          <Image
            src={"/service_design.svg"}
            alt=""
            width={1400}
            height={200}
            className="w-full h-full object-cover object-left-bottom"
          />
        </div>
        <div className="max-w-fit min-h-screen px-10 flex gap-10 lg:gap-24 items-center z-10">
          <div className="w-full md:w-[55%] lg:w-[65%] flex flex-col gap-5 order-2 md:order-none pb-48 sm:pb-32">
            <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sitePrimary-800 md:leading-10 lg:leading-[60px]">
              Unleash brand&apos;s potential with {" "}
              <span className="text-siteRubinRed-800">cutting-edge digital marketing!</span>
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-siteTextIcon-disabled font-semibold"></p>
            <a
              href="/casestudy"
              className="w-fit btncss flex justify-center items-center gap-3 py-3 px-5 text-sm md:text-base font-medium text-center text-white rounded-xl bg-sitePrimary-700 hover:bg-emerald-600 focus:ring-4 focus:ring-sitePrimary-900"
            >
              See How We Work
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 font-bold" viewBox="0 0 48 48">
                <path
                  fill="currentColor"
                  d="M41.45 6.34c.336.275.55.692.55 1.16v12a1.5 1.5 0 0 1-3 0v-8.379l-9.44 9.44a1.5 1.5 0 1 1-2.12-2.122L36.877 9H28.5a1.5 1.5 0 0 1 0-3h11.981a1.5 1.5 0 0 1 .97.34M12.5 9A3.5 3.5 0 0 0 9 12.5v23a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-8a1.5 1.5 0 1 1 3 0v8a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-23A6.5 6.5 0 0 1 12.5 6h8a1.5 1.5 0 0 1 0 3z"
                />
              </svg>
            </a>
          </div>
          <div className="absolute right-0 bottom-0 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] flex items-center justify-center order-1 md:order-none z-10">
            <Image src={"/home_banner.svg"} className="w-[90%] h-full object-cover" alt="" width={1000} height={1000} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto w-full">
            <h2 className="mb-4 text-3xl tracking-tight font-medium text-siteTextIcon-primary textcss-primary">
              Customized digital services for brand aspirations
            </h2>
          </div>
          <div className="space-y-8 grid md:grid-cols-3 md:gap-12 md:space-y-0">
            {services.map((item, index) => {
              // const Icon = item.icon;

              return (
                <div key={index} className="border-l border-siteNeutral-300 pl-6">
                  <Link href={`/services/${item.serviceTitle}`}>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-lg bg-sitePrimary-700/25 lg:h-12 lg:w-12 p-2">
                      <div className="flex justify-center items-center rounded-md bg-white w-full h-full p-0.5">
                        {/* <Icon /> */}
                        <Image src={item.image} width={30} height={30} />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold -ml-6 pl-6 border-l-2 border-sitePrimary-700 text-siteTextIcon-primary textcss-primary">
                      {item.serviceTitle}
                    </h3>
                    <p className="text-siteTextIcon-secondary textcss-secondary">{item.information}</p>
                    {/* <p className="text-siteTextIcon-secondary pt-6">Customized digital services for brand aspirations</p> */}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto w-full">
            <h2 className="mb-4 textcss-primary text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Case Studies{" "}
            </h2>
            <p className="text-gray-500 textcss-secondary text-base lg:text-xl font-light text-siteTextIcon-disabled">
              At Noble Aspect, LLC, we believe in results, not just promises. Explore how our digital marketing, branding, and design prowess has reshaped businesses. These aren’t just case studies but the stepping stones for your brand’s journey. Ready to take the next step? Contact Us!
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy &&
              caseStudy.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative bg-sitePrimary-100 border flex flex-col gap-3 group transition-all duration-300 ${
                    hoveredDiv === index ? "h-fit z-20" : "h-80"
                  } border-siteNeutral-300 p-5 rounded-2xl text-gray-500 dark:text-gray-400 overflow-hidden ${
                    hoveredDiv === index &&
                    (index + 3 < caseStudy.length || index + 2 < caseStudy.length || index + 1 < caseStudy.length)
                      ? "-mb-[520px]"
                      : ""
                  }`}
                  onClick={() => router.push(`/casestudy/${item.casestudyTitle}`)}
                >
                  <h2 className="mb-4 text-2xl textcss-primary tracking-tight font-medium text-siteTextIcon-primary">
                    {item?.casestudyTitle}
                  </h2>
                  <div className="w-full h-full">
                    <Image src={item?.image} alt="" width={500} height={20} className="w-full h-full object-contain" />
                  </div>
                  {hoveredDiv === index && (
                    <p className="text-base textcss-secondary tracking-tight font-medium text-siteTextIcon-disabled transition-opacity duration-300 ease-in-out opacity-100">
                      {item?.information}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/** Newsletter Section */}
      <section className="bg-white pb-20 px-4">
        <div className="py-8 px-4 h-60 md:h-[400px] mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-[url('/newsletter-banner.jpg')] bg-cover bg-center rounded-3xl flex flex-col gap-10 items-center justify-center">
          <h1 className="mx-auto font-medium text-sitePrimary-700 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-screen-md">
            Partner with us, and together, let&apos;s create immersive digital experiences
          </h1>
          <a
            href="/contact"
            className="inline-flex btncss justify-center items-center py-3 px-5 text-sm md:text-base font-medium text-center text-white rounded-xl bg-sitePrimary-700 hover:bg-sitePrimary-800 focus:ring-4 focus:ring-sitePrimary-900"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/** Inquiry section */}
      <section className="bg-siteNeutral-100 w-full flex justify-center">
        <div className="max-w-screen-xl w-full flex gap-12 py-8 px-4 sm:py-16 xl:px-0">
          <div className="mx-auto w-full md:w-1/2">
            <h2 className="mb-4 text-3xl textcss-primary tracking-tight font-medium text-siteTextIcon-primary dark:text-white">
              Inquiry
            </h2>
            {/* <p className="mb-8 lg:mb-16 font-light text-base text-siteTextIcon-disabled dark:text-gray-400 sm:text-xl"></p> */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm textcss-primary font-semibold text-gray-900 dark:text-gray-300"
                  >
                    First Name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 textcss-secondary text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm textcss-primary font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Last Name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 textcss-secondary text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm textcss-primary font-semibold text-gray-900 dark:text-gray-300">
                    Email<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 textcss-secondary text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="field" className="block mb-2 text-sm textcss-primary font-semibold text-gray-900 dark:text-gray-300">
                  Select Type<span className="text-red-500"> *</span>
                </label>
                <select
                  name="field"
                  id="field"
                  value={formData.field}
                  onChange={handleChange}
                  className="block w-full p-3 mb-6 text-sm textcss-secondary text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="Select Field">Select Type</option>
                  <option value="Person">Person</option>
                  <option value="Company">Company</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="service" className="block mb-2 text-sm textcss-primary font-semibold text-gray-900 dark:text-gray-300">
                  Select Services<span className="text-red-500"> *</span>
                </label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="block w-full p-3 mb-6 text-sm textcss-secondary text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="Select Services">Select Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Branding">Branding</option>
                  <option value="Design">Design</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block textcss-primary mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Message<span className="text-red-500"> *</span>
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 textcss-secondary bg-white resize-none rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a message..."
                  required
                ></textarea>
              </div>
              <ReCAPTCHA sitekey={key} onChange={(val) => setCaptcha(val)} />
              <button
                disabled={!captcha}
                type="submit"
                className="py-3 btncss px-5 text-sm font-medium text-center text-white rounded-lg bg-sitePrimary-800 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mx-auto hidden md:block md:w-1/2">
            <div className="rounded-2xl h-full overflow-hidden bg-[url('/contact-banner.png')] bg-cover bg-top"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
