"use client";
import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { BsBoxSeam } from "react-icons/bs";
import { CgCreditCard } from "react-icons/cg";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const pathname = usePathname();

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  useEffect(() => {
    console.log(pathname, selectedItem);
  }, [pathname, selectedItem]);

  return (
    <div className=" lg:h-screen">
      <Box textAlign="center" width="100%" className="sideBarHeader">
        <Link href="/">Centre d'aide</Link>
      </Box>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Icon
                as={VscAccount}
                boxSize={6}
                mr="20px"
                color="#FF561C"
                className="sidebarItemIcon"
              />
              <Box as="span" flex="1" textAlign="left" className="sidebarItem">
                Gestion de compte
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List fontSize="md" spacing={4}>
              <ListItem>
                <Link
                  href="/help_inscription"
                  className={`sidebarItem ${
                    pathname === "/help_inscription" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_inscription")}>
                  Inscription
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/help_connexion"
                  className={`sidebarItem ${
                    pathname === "/help_connexion" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_connexion")}>
                  Connexion à votre compte
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/help_maj_ach"
                  className={`sidebarItem ${
                    pathname === "/help_maj_ach" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_maj_ach")}>
                  Mise à jour des informations personnelles (Acheteur)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/help_maj_vend"
                  className={`sidebarItem ${
                    pathname === "/help_maj_vend" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_maj_vend")}>
                  Mise à jour des informations personnelles (Vendeur)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/help_mdp"
                  className={`sidebarItem ${
                    pathname === "/help_mdp" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_mdp")}>
                  Réinitialisation du mot de passe
                </Link>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Icon
                as={BsBoxSeam}
                boxSize={6}
                mr="20px"
                color="#FF561C"
                className="sidebarItemIcon"
              />
              <Box as="span" flex="1" textAlign="left" className="sidebarItem">
                Gestion des produits
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List fontSize="md">
              <ListItem>
                <Link
                  href="/help_product"
                  className={`sidebarItem ${
                    pathname === "/help_product" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_product")}>
                  Ajout d'un produit
                </Link>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Icon
                as={CgCreditCard}
                boxSize={6}
                mr="20px"
                color="#FF561C"
                className="sidebarItemIcon"
              />
              <Box as="span" flex="1" textAlign="left" className="sidebarItem">
                Abonnement au pack
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List fontSize="md">
              <ListItem>
                <Link
                  href="/help_abnm"
                  className={`sidebarItem ${
                    pathname === "/help_abnm" ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick("/help_abnm")}>
                  Choix d'un abonnement
                </Link>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Sidebar;
