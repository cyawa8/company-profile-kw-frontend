export default function Container({children}) {
    return (
        <div 
            className="mx-auto px-8 sm:px-6 lg:px-12 py-6 md:py-12 space-y-8 max-w-7xl"
        >
            {children}
        </div>
    )
}
