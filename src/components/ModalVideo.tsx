import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-6 py-2 bg-accent text-white rounded-lg font-primary hover:bg-accent/90 transition'>
          View Services
        </button>
      </DialogTrigger>
      <DialogContent>
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
