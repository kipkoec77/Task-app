import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page when searching
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <div className="text-center py-8">
              <p className="text-xl text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
              <Button variant="primary" onClick={fetchPosts}>
                Retry
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Posts from API
        </h1>

        {/* Search Bar */}
        <Card className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search posts by title or content..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </Card>

        {/* Posts Count */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Showing {paginatedPosts.length} of {filteredPosts.length} posts
        </p>

        {/* Posts List */}
        <div className="space-y-4 mb-6">
          {paginatedPosts.map(post => (
            <Card key={post.id} className="hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {post.id}. {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {post.body}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  Post ID: {post.id}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  User ID: {post.userId}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-4 py-2 text-gray-700 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

        {/* No Results */}
        {paginatedPosts.length === 0 && (
          <Card>
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No posts found matching your search.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}

export default PostsPage

