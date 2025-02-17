import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <img src="/icon.png" alt="Icon" className="w-12 h-12 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Heyya, Welcome To Radiant!</h2>
        <p className="text-base-content/60">
          Currently We Are In Pre Beta, So This Is The Scratch Project, In The Future, Expect Moreeee.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
