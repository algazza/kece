import styles from "../helper/style";
import { useEffect, useState } from "react";
import { logoArmor } from "../helper";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [toggle, setToggle] = useState(false);

  // shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 bg-primary z-[100] duration-300 ${
        hasShadow ? "shadow-[0px_0px_90px_9px_#00000024] " : ""
      }`}
    >
      <nav className={`flex justify-between ${styles.paddingX} py-2`}>
        <a href="/">
          <img src={logoArmor} alt="logo" className="h-14 sm:h-16" />
        </a>

        <ul
          className={`list-none sm:flex hidden justify-end items-center flex-1 gap-12 ${styles.fontBody} font-semibold`}
        >
          <li>
            <FlyoutLink href={"/newwebsite"}>Home</FlyoutLink>
          </li>
          <li>
            <FlyoutLink FlyoutContent={Product}>Produk</FlyoutLink>
          </li>
          <li>
            <FlyoutLink FlyoutContent={Service}>Layanan</FlyoutLink>
          </li>
          <li>
            <FlyoutLink href={"berita"}>Berita</FlyoutLink>
          </li>
          <li>
            <FlyoutLink FlyoutContent={AboutUs}>Tentang Kami</FlyoutLink>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <CloseRoundedIcon className="h-6" />
            ) : (
              <MenuRoundedIcon className="h-6" />
            )}
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                key="menu"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -z-[100] top-0 right-0 w-full px-8 pt-20 pb-4 bg-primary shadow-[0px_0px_90px_9px_#00000024]"
                onClick={(e) => {
                  if (e.target.tagName === "A") {
                    setToggle(false);
                  }
                }}
              >
                <ul className="font-semibold">
                  <li className="my-3">
                    <Link to={""}>Home</Link>
                  </li>
                  <li>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ padding: "0px", border: "none" }}
                      >
                        Produk
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          <li className="flex flex-col gap-4 pl-4 text-abuGelap border-l-2 border-l-abuGelap">
                            <Link to={"tabungan"}>Tabungan</Link>
                            <Link to={"deposito"}>Deposito</Link>
                            <Link to={"kredit"}>Kredit</Link>
                          </li>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  </li>

                  <li>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ padding: "0px", border: "none" }}
                      >
                        Layanan
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          <li className="flex flex-col gap-4 pl-4 text-abuGelap border-l-2 border-l-abuGelap">
                            <Link to={"layanan-digital"}>Layanan Digital</Link>
                            <Link to={"mobil-kas"}>Mobil Kas</Link>
                            <Link to={"promo"}>Promo</Link>
                            <Link to={"sponsor"}>Sponsor</Link>
                            <Link to={"pick-up-service"}>Pick Up Service</Link>
                            <Link to={"mailto:info@bprartomoro.co.id"}>Pengaduan</Link>
                            <Link to={"armor-properti"}>Armor Properti</Link>
                          </li>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  </li>

                  <li className="my-3">
                    <Link to={"berita"}>Berita</Link>
                  </li>

                  <li>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ padding: "0px", border: "none" }}
                      >
                        Tentang Kami
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          <li className="flex flex-col gap-4 pl-4 text-abuGelap border-l-2 border-l-abuGelap">
                            <Link to={"sejarah"}>Sejarah</Link>
                            <Link to={"visi-misi"}>Visi Misi</Link>
                            <Link to={"penghargaan"}>Penghargaan</Link>
                            <Link to={"manajemen"}>Manajemen</Link>
                            <Link to={"lokasi"}>Lokasi</Link>
                            <Link to={"laporan"}>Laporan</Link>
                          </li>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link
        to={href}
        onClick={FlyoutContent && ((e) => e.preventDefault())}
        className={`relative ${!href && "cursor-default"}`}
      >
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-merahh-500 transition-transform duration-300 ease-out"
        ></span>
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-primary"
          >
            <div className="absolute -top-6 left-0 right-0 bg-transparent h-6" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// function subMenu
const AboutUs = () => {
  const items = [
    { name: "Sejarah", link: "sejarah" },
    { name: "Visi Misi", link: "visi-misi" },
    { name: "Penghargaan", link: "penghargaan" },
    { name: "Manajemen", link: "manajemen" },
    { name: "Lokasi", link: "lokasi" },
    { name: "Laporan", link: "laporan" },
  ];

  return <MenuList items={items} />;
};

const Product = () => {
  const items = [
    { name: "Tabungan", link: "tabungan" },
    { name: "Deposito", link: "deposito" },
    { name: "Kredit", link: "kredit" },
  ];

  return <MenuList items={items} />;
};

const Service = () => {
  const items = [
    { name: "Layanan Digital", link: "layanan-digital" },
    { name: "Mobil Kas", link: "mobil-kas" },
    { name: "Promo", link: "promo" },
    { name: "Sponsor", link: "sponsor" },
    { name: "Pick Up Service", link: "pick-up-service" },
    { name: "Armor Properti", link: "armor-properti" },
    { name: "Pengaduan", link: "mailto:info@bprartomoro.co.id" },
  ];

  return <MenuList items={items} />;
};

// Template subMenu
const MenuList = ({ items }) => {
  return (
    <div className="w-52 py-6 px-8 shadow-[0px_20px_20px_0px_#00000024]">
      <ul className="flex flex-col text-center flex-1 gap-2">
        {items.map((item, index) => (
          <li key={index} className="hover:text-merahh-500 duration-300">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
// Al 31 Juli - 1 Agustus
