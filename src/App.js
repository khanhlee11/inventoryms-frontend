import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoute, AdminRoute } from './service/Guard';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SupplierPage from './pages/SupplierPage/SupplierPage';
import AddEditSupplierPage from './pages/AddEditSupplierPage/AddEditSupplierPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AddEditProductPage from './pages/AddEditProductPage/AddEditProductPage';

import TransactionDetailsPage from './pages/TransactionDetailsPage/TransactionDetailsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

import TransactionPage from './pages/TransactionPage/TransactionPage';
import PurchasePage from './pages/PurchaseSellPage/PurchasePage'
import SellPage from './pages/PurchaseSellPage/SellPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ADMIN ROUTES */}
        <Route
          path="/category"
          element={<AdminRoute element={<CategoryPage />} />}
        />
        <Route
          path="/supplier"
          element={<AdminRoute element={<SupplierPage />} />}
        />
        <Route
          path="/add-supplier"
          element={<AdminRoute element={<AddEditSupplierPage />} />}
        />
        <Route
          path="/edit-supplier/:supplierId"
          element={<AdminRoute element={<AddEditSupplierPage />} />}
        />
        <Route
          path="/product"
          element={<AdminRoute element={<ProductPage />} />}
        />

        <Route
          path="/add-product"
          element={<AdminRoute element={<AddEditProductPage />} />}
        />
        <Route
          path="/edit-product/:productId"
          element={<AdminRoute element={<AddEditProductPage />} />}
        />

        {/* ADMIN AND MANAGERS ROUTES */}
        <Route
          path="/purchase"
          element={<ProtectedRoute element={<PurchasePage />} />}
        />
        <Route
          path="/sell"
          element={<ProtectedRoute element={<SellPage />} />}
        />
        <Route
          path="/transaction"
          element={<ProtectedRoute element={<TransactionPage />} />}
        />
        <Route
          path="/transaction/:transactionId"
          element={<ProtectedRoute element={<TransactionDetailsPage />} />}
        />

        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} />}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<DashboardPage />} />}
        />

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
