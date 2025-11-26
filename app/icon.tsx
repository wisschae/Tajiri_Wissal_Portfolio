import { ImageResponse } from 'next/og'

export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                    borderRadius: '50%',
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'sans-serif',
                    }}
                >
                    W
                </div>
            </div>
        ),
        size
    )
}
