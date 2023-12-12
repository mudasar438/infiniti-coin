import { CircleLoader } from "react-awesome-loaders";

export const Loading = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#09072D", // Semi-transparent white background
          zIndex: 1000, // Higher zIndex to appear above other content
        }}
      >
        <CircleLoader
          meshColor="#B2A7F7"
          lightColor="#E0E7FF"
          duration={1.5}
          desktopSize="90px"
          mobileSize="64px"
        />
      </div>
    </>
  );
};
