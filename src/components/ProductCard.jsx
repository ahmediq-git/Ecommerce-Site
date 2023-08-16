import { Card, Box, Typography } from "@mui/material";
import { ItemImages } from "../utils/ImageExport";

const ProductCard = (props) => {
  return (
    <div>
      <Card
        sx={{
            display: 'flex',
            width: 400,
            height: 300,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
            border: '14px solid', 
            borderColor: 'silver', 
          }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <img
            src={ItemImages[props.productName]}
            style={{
              width: 150,
              height: 150,
              objectFit: "cover",
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
            }}
          />
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            {props.productName}
          </Typography>
          <Typography sx={{fontSize: 16}}>{props.price} PKR</Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ProductCard;
