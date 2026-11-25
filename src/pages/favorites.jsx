import {useQuery} from '@tanstack/react-query'
import {favoritesService} from '../service/favorites-service.js'
import {ProductCard} from '../components/product-card.jsx'

export function FavoritesPage() {
    const { data, isLoading, isError } = useQuery({
        ...favoritesService.getFavoritesQueryOptions(),
        retry: false,
    })

    return (
        <>
            <h1 className="text-3xl font-bold underline text-teal-500 mt-6">FavoritesPage</h1>

            {isLoading && <p className="mt-4">Загрузка...</p>}

            {isError && <p className="mt-4">Пожалуйста, войдите в систему или зарегистрируйтесь</p>}

            {!isLoading && !isError && data?.length === 0 && (
                <p className="mt-4">В избранном пока ничего нет</p>
            )}

            <div className="grid grid-cols-4 gap-4 mt-4">
                {data?.map(product => (
                    <ProductCard key={product._id} product={{...product, isFavorite: true}} />
                ))}
            </div>
        </>
    )
}
