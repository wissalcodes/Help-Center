import React from "react";
import { Text, Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

function help_connextion() {
  return (
    <div className="w-full  min-h-screen p-[40px]">
      <Box>
        <Text className="BigTitle">Gestion de compte</Text>
      </Box>

      <Heading size="lg">
        {" "}
        Comment se connecter à votre compte sur Temacina.com ?
      </Heading>

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
        <div className="w-[100%]">
          <img src="./Assets/sign/1.png" alt="Image" />
        </div>
      </Box>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 2 : Choisir l'option de connexion{" "}
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Entrez votre email et votre mot de passe, puis cliquez sur "SE
            CONNECTER".
          </ListItem>
        </UnorderedList>
        <div className="w-[100%]">
          <img src="./Assets/sign/1.png" alt="Image" />
        </div>
      </Box>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Tutoriel : Comment se connecter à votre compte sur Temacina.com ?{" "}
        </Heading>
        <div className="w-[100%]">
          <img src="https://via.placeholder.com/900x400" alt="Image" />{" "}
        </div>
      </Box>
    </div>
  );
}

export default help_connextion;
