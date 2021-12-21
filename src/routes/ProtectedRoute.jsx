import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from 'routes' // Route list

const ProtectedRoutes = () => (
    <Routes>
        <Suspense>
            {routes.map(({ component: Component, path, exact }) => (
                <Route path={`/${path}`} key={path} exact={exact}>
                    <Component />
                </Route>
            ))}
        </Suspense>
    </Routes>
)

export default ProtectedRoutes
