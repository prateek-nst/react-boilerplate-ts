import React, { CSSProperties } from "react";

import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Box, Modal } from "@mui/material";

import { signal } from "@preact/signals-react";

interface TextImageChipProps {
  title: string;
  imgSrcOrText: string;
}

export const isImageChipShow = signal(false);

const ImageChip: React.FC<TextImageChipProps> = ({
  title,
  imgSrcOrText,
}: TextImageChipProps) => {
  const handleExpandClick = () => {
    isImageChipShow.value = true;
  };

  const handleCloseModal = () => {
    isImageChipShow.value = false;
  };

  const styles: { [key: string]: CSSProperties } = {
    detailswraper: {
      display: "flex",
      flexDirection: "column",
    },
    TextImageChipcontainer: {
      display: "flex",
      flexDirection: "row",
    },
    topTextStyle: {
      fontWeight: "400",
      fontSize: "0.9rem",
      color: "#A7A6A6",
    },
    bottomTextStyle: {
      fontWeight: "400",
      fontSize: "1.125rem",
      color: "#000000",
      wordBreak: "break-word",
    },
    imageContainer: {
      width: "7.125rem",
      height: "7.125rem",
      backgroundImage: `url(${imgSrcOrText})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: "cover",
      position: "relative",
      cursor: "pointer",
      marginTop: "1px",
    },
    icon: {
      position: "absolute",
      width: "1.5625rem",
      height: "1.5625rem",
      bottom: "5px",
      right: "5px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      maxWidth: "90vw",
      maxHeight: "90vh",
      objectFit: "contain",
    },
    cropfreeIcon: {
      fill: "white",
    },
  };

  return (
    <div style={styles.TextImageChipcontainer}>
      <div style={styles.detailswraper}>
        {imgSrcOrText && (
          <Box sx={styles.imageContainer} onClick={handleExpandClick}>
            <Box style={styles.icon}>
              <CropFreeIcon sx={styles.cropfreeIcon} />
            </Box>
          </Box>
        )}
        {isImageChipShow.value && (
          <Modal
            open={isImageChipShow.value}
            onClose={handleCloseModal}
            style={styles.modal}
          >
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
                role="presentation"
                onClick={handleCloseModal}
              >
                <CloseIcon fontSize="large" />
              </div>
              <img alt={title} src={imgSrcOrText} style={styles.image} />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ImageChip;
