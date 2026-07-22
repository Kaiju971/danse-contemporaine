import { motion } from "framer-motion";
import {
  GalleryContainer,
  GalleryImageCard,
  ImageOverlay,
} from "./gallery.styled";
import { Container, Grid, Typography, Box, CardMedia } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const galleryImages = [
  "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551829364-1c2764355f41?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
];

export const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            GALERIE
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 2,
            }}
          >
            Découvrez quelques moments forts de nos cours et spectacles.
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {galleryImages.map((image, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.02 }}
              >
                <GalleryImageCard>
                  <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={`Galerie ${index + 1}`}
                    sx={{ objectFit: "cover" }}
                  />
                  <ImageOverlay className="overlay">
                    <ZoomInIcon sx={{ fontSize: 40 }} />
                  </ImageOverlay>
                </GalleryImageCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GalleryContainer>
  );
};
