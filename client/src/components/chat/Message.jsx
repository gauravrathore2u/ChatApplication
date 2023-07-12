import React from "react";
import { formateDate } from "../../utils/commanUtils";
import { useSelector } from "react-redux";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { iconPDF } from "../../constants/data";
import { onDownloadMedia } from "../../utils/commanUtils";

const Message = ({ message }) => {
  const loggedInUser = useSelector((state) => state.loginInfo);

  return (
    <>
      {loggedInUser.email === message.senderEmail ? (
        <div className="bg-[#dcf8c6] max-w-[60%] ml-auto m-3 px-2 py-1 w-fit flex break-words rounded-2xl text-sm">
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </div>
      ) : (
        <div className="bg-[#FFFFFF] max-w-[60%] m-3 px-2 py-1 w-fit flex gap-4 items-center break-words rounded-2xl text-sm">
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </div>
      )}
    </>
  );
};

const TextMessage = ({ message }) => {
  return (
    <div className="flex items-center gap-4">
      <div>{message.text}</div>
      <div className="text-xs text-slate-500">{formateDate(message.createdAt)}</div>
    </div>
  );
};

const ImageMessage = ({ message }) => {

  return (
    <div>
      {message?.text?.includes(".pdf") ? (
        <div className="flex items-center ">
            <img src={iconPDF} alt="pdf" className="w-[80px]"/>
            <p>{message.text.split('/').pop()}</p>
        </div>
      ) : (
        <img
          src={message.text}
          alt={message.text.split('/').pop()}
          className="w-[300px] h-full object-cover"
        />
      )}
      <div className="relative">
        <div className="ml-3 text-xs text-slate-500 absolute bottom-0 right-0 flex gap-2 items-center">
          <AiOutlineCloudDownload onClick={(e)=>onDownloadMedia(e, message.text)} className="text-2xl cursor-pointer" />
          {formateDate(message.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Message;
