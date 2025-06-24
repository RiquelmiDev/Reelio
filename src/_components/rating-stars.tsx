import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface RatingStarsProps {
  ratingValue: number;
}

export default function RatingStars({ ratingValue }: RatingStarsProps) {
  return (
    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
      <Rating
        name="text-feedback"
        value={ratingValue}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        size="small"
        sx={{
          color: "#34D399", // cor das estrelas preenchidas
          "& .MuiRating-iconEmpty": {
            color: "#B0B0B0", // cor das estrelas vazias
          },
        }}
      />
    </Box>
  );
}
