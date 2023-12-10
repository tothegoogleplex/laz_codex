function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

export function GalleryCard({ i, charName }) {
    return (
        <div className={classNames("h-48 rounded bg-cover", i.anchor)} style={{ "backgroundImage": `url("${process.env.PUBLIC_URL + "/images/" + charName + "/" + i.url}")` }}>
        </div>
    );
}