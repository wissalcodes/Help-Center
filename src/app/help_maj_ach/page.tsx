import React from "react";
import { Text, Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

function help_maj_ach() {
  return (
    <div className="w-full  min-h-screen p-[40px]">
      <Box>
        <Text className="BigTitle">Gestion de compte</Text>
      </Box>

      <Heading size="lg">
        {" "}
        Comment mettre à jour vos informations personnelles ? (Acheteur)
      </Heading>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 1 : Accéder au profile Acheteur
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Cliquez sur votre photo de profil au niveau de la barre de
            navigation et choisissez Profile Acheteur
          </ListItem>
        </UnorderedList>
        <img src="./Assets/majAch/a.png" alt="Image" />
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 2 : Activer le mode d'édition{" "}
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            {" "}
            Cliquez sur l'icône de modification qui se trouve à droite.
          </ListItem>
        </UnorderedList>
        <img src="./Assets/majAch/b.png" alt="Image" />
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Etape 3 : Mettez à jour les informations{" "}
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Écrivez les nouvelles informations que vous souhaitez ajouter dans
            les champs qui apparaissent.
          </ListItem>
          <ListItem className="liste_item">
            Cliquez sur "Modifier" pour confirmer votre modification
          </ListItem>
        </UnorderedList>
        <img src="./Assets/majAch/c.png" alt="Image" />
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px">
          {" "}
          Tutoriel : Comment mettre à jour vos informations personnelles
          (Acheteur){" "}
        </Heading>
        <img src="https://via.placeholder.com/900x400" alt="Image" />
      </Box>
    </div>
  );
}

export default help_maj_ach;
