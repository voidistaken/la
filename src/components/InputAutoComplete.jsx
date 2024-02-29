import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
const InputAutoComplete = ({
  show,
  setShow,
  data,
  setSomething,
  setSearchText,
}) => {
  return (
    <div className="relative">
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        id="from_location"
        type="text"
        placeholder="Enter Location"
      />
      {show && (
        <div className="absolute top-4 w-full h-full rounded-sm">
          {data && (
            <div className="rounded-md col-span-2 flex justify-end py-7 ">
              <ScrollArea className=" h-80 w-96 rounded-md border bg-slate-50 z-[5]">
                <div className="p-4">
                  {data.map((d) => (
                    <>
                      <div
                        onClick={() => {
                          setShow(false);
                          setSomething(d);
                        }}
                        key={Math.random()}
                        className="text-sm cursor-pointer hover:bg-gray-100 p-4 rounded-md"
                      >
                        {d.display_name}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputAutoComplete;
