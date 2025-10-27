const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto py-8 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 React Week 3 Assignment. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://react.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              React Docs
            </a>
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Tailwind CSS
            </a>
            <a 
              href="https://jsonplaceholder.typicode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              JSONPlaceholder
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

