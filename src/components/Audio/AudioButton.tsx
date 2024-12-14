import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FastForwardIcon from "@mui/icons-material/FastForward";

interface IAudioButton {
  onClick?: () => void;
  type: string;
  downloadSrc?: string;
}

export const AudioButton = (props: IAudioButton) => {
  const { onClick, downloadSrc, type } = props;

  const _renderIcon = () => {
    switch (type) {
      case "play":
        return <PlayArrowIcon />;
      case "pause":
        return <PauseIcon />;
      case "rewind":
        return <FastRewindIcon />;
      case "forward":
        return <FastForwardIcon />;
      case "download":
        return <CloudDownloadIcon />;
      default:
        break;
    }
  };

  return (
    <button
      className="bg-gray-800 text-gray-200 h-8 w-8 rounded-lg my-1"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {type === "download" ? (
        <a href={downloadSrc} download>
          {_renderIcon()}
        </a>
      ) : (
        _renderIcon()
      )}
    </button>
  );
};
