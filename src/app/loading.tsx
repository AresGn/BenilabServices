'use client'

import React from 'react'

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      width: '100%'
    }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(0, 91, 153, 0.1)',
          borderLeftColor: '#005B99',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
} 
