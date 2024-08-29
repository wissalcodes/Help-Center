import React from "react";
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function help_inscription() {
  return (
    <div className="w-full  min-h-screen p-[40px]">
      <Box>
        <Text className="BigTitle">Gestion de compte</Text>
      </Box>

      <Heading size="lg"> Comment s'inscrire à Temacina.com ?</Heading>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 1 : Accéder à la page de connexion/inscription
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Accédez à la page d’accueil Temacina.com.
          </ListItem>
          <ListItem className="liste_item">
            Cliquez sur l'icône "Comptes" en haut à droite de la page d'accueil.
          </ListItem>
        </UnorderedList>
        <img src="./Assets/sign/1.png" alt="Image" />
      </Box>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 2 :Choisir l'option d'inscription{" "}
        </Heading>
        <img src="./Assets/sign/2.png" alt="Image" />
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            cliquez sur "S'INSCRIRE MAINTENANT" qui se trouve au-dessus du
            bouton "Se connecter".
          </ListItem>
        </UnorderedList>
      </Box>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 3 : S’inscrire{" "}
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Remplissez tous les champs avec vos informations.
          </ListItem>
          <ListItem className="liste_item">
            Cliquez sur "S’INSCRIRE" pour continuer.
          </ListItem>
        </UnorderedList>
        <img src="./Assets/sign/3.png" alt="Image" />
      </Box>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Tutoriel : Comment s'inscrire sur Temacina.com{" "}
        </Heading>
        <img src="https://via.placeholder.com/900x400" alt="Image" />
      </Box>
    </div>
  );
}

export default help_inscription;
