export default function Container({children}){
    return(
        <div 
        className="container mx-auto px-4 py-8 space-y-12">
            {children}    
        </div>
    );
}