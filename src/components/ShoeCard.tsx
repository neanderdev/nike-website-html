interface ShoeCardProps {
    imgURL: {
        thumbnail: string;
        bigShoe: string;
    };
    changeBigShoeImage: (shoe: string) => void;
    bigShoeImg: string;
};

export function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }: ShoeCardProps) {
    function handleClick() {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm: h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="Shoe Collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
}
