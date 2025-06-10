export default function FormHomeContent(){
    return(
        <form className="flex flex-col gap-2">
            <span>Title</span>
            <input className="rounded-md" type="text"/>
            <span>Sub Title</span>
            <input type="text"/>
            <span>Image</span>
            <input type="file" />
        </form>
    );
}