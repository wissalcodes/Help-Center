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
  Image,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function help_product() {
  return (
    <div className="w-full  min-h-screen p-[40px]">
      <Box>
        <Text className="BigTitle">Gestion des produits</Text>
      </Box>

      <Heading size="lg">Comment ajouter un produit sur Temacina.com ?</Heading>

      <Box className="tab-content-box">
        <Heading size="md" mb="20px" paddingTop="20px">
          {" "}
          Etape 1 : Cliquez sur votre photo de profil au niveau de la barre de
          navigation et choisissez “Pofile vendeur”.
        </Heading>
        <Image src="./Assets/pdct/a.png" alt="Image" />
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px" paddingTop="20px">
          {" "}
          Etape 2 : Sur la barre de navigation à gauche, cliquez sur "Produits".
        </Heading>
        <Image src="./Assets/pdct/b.png" alt="Image" />
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px" paddingTop="20px">
          {" "}
          Etape 3 :Cliquez sur le bouton "Poster un produit" qui se trouve à
          gauche.
        </Heading>
        <Image src="./Assets/pdct/c.png" alt="Image" />
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px" paddingTop="20px">
          {" "}
          Etape 4 : Choisissez le secteur et la catégorie du produit.
        </Heading>
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Choisissez le secteur d'activité.
          </ListItem>
          <ListItem className="liste_item">
            Sélectionnez le marché visé.
          </ListItem>
          <ListItem className="liste_item">
            Cliquez sur le champ "Catégorie", Une liste déroulante apparaîtra
            contenant les catégories possibles, choisissez-en une.{" "}
          </ListItem>
        </UnorderedList>
        <Image src="./Assets/pdct/d.png" alt="Image" mb={2} />
        <Image src="./Assets/pdct/e.png" alt="Image" />
        <UnorderedList padding="20px">
          <ListItem className="liste_item">
            Choisissez la sous-catégorie de la même manière que vous avez choisi
            la catégorie.
          </ListItem>
          <ListItem className="liste_item">
            Donnez le nom de votre produit..
          </ListItem>
          <ListItem className="liste_item">
            Cliquez sur "Suivant" pour passer à l'étape suivante.{" "}
          </ListItem>
        </UnorderedList>
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px" paddingTop="20px">
          {" "}
          Etape 5 : Remplissez les informations.
        </Heading>
        <OrderedList padding="20px">
          <ListItem className="liste_item">
            Informations du produit :
            <OrderedList padding="20px">
              <ListItem className="liste_item">
                Ajoutez les mots-clés en rapport avec votre produit.{" "}
              </ListItem>
              <ListItem className="liste_item">
                Introduisez la marque, la date de fabrication, le pays
                d'origine, le modèle, le groupe et la certification.
              </ListItem>
              <ListItem className="liste_item">Cliquez sur "Suivant".</ListItem>
            </OrderedList>
          </ListItem>
          <Image src="./Assets/pdct/f.png" alt="Image" />
          <ListItem className="liste_item">
            Description :
            <OrderedList padding="20px">
              <ListItem className="liste_item">
                Ajoutez au moins une photo claire de votre produit
                (obligatoire), Vous pouvez ajouter jusqu’à 3 photos
                gratuitement, ou payer pour en ajouter davantage.
              </ListItem>
              <ListItem className="liste_item">
                Ajoutez une vidéo de votre produit pour mieux le présenter
                (facultatif).
              </ListItem>
              <ListItem className="liste_item">
                Ajoutez une description de votre produit pour fournir plus de
                détails.
              </ListItem>
              <ListItem className="liste_item">Cliquez sur "Suivant".</ListItem>
            </OrderedList>
            <Image src="./Assets/pdct/g.png" alt="Image" />
          </ListItem>
          <ListItem className="liste_item">
            Échange :
            <OrderedList padding="20px">
              <ListItem className="liste_item">
                Choisissez la fixation du prix.
              </ListItem>
              <ListItem className="liste_item">
                Introduisez la quantité minimale de commande.
              </ListItem>
              <ListItem className="liste_item">
                Introduisez le prix par quantité ; vous pouvez ajouter plusieurs
                prix en cliquant sur le bouton "+".
              </ListItem>
              <Image src="./Assets/pdct/h.png" alt="Image" mb={2} />
              <Image src="./Assets/pdct/i.png" alt="Image" />
              <ListItem className="liste_item">
                Cliquez sur le champ "Modalités de paiement". Une liste
                déroulante apparaîtra ; choisissez tous les modes de paiement
                disponibles.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem className="liste_item">
            Logistique :
            <OrderedList padding="20px">
              <ListItem className="liste_item">
                Introduisez le délai de livraison selon la quantité du
                produit,vous pouvez ajouter plusieurs délais selon la quantité
                en cliquant sur “+”.
              </ListItem>
              <ListItem className="liste_item">
                Choisissez le mode logistique.
              </ListItem>
              <ListItem className="liste_item">Introduisez le port.</ListItem>
              <ListItem className="liste_item">
                Ajoutez une description de l'emballage ainsi qu'une photo de
                l'emballage.
              </ListItem>
              <ListItem className="liste_item">
                Assurez-vous que vous acceptez les conditions et la politique du
                marché.
              </ListItem>
              <ListItem className="liste_item">Cliquez sur "Suivant".</ListItem>
            </OrderedList>
            <Image src="./Assets/pdct/j.png" alt="Image" />
          </ListItem>
        </OrderedList>
      </Box>
      <Box className="tab-content-box">
        <Heading size="md" mb="20px" paddingTop="20px">
          {" "}
          Tutoriel : Comment ajouter un produit sur Temacina.com
        </Heading>
        <Image src="https://via.placeholder.com/900x400" alt="Image" />
      </Box>
    </div>
  );
}

export default help_product;
