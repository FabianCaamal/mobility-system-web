const APY_KEY = import.meta.env.VITE_TOKEN_GOOGLE
const CALLBACK_NAME = 'gmapsCallback'

const libraries = 'places,geometry,marker'
let mapInitialized = !!window.google

let resolveInitPromise: ((value?: unknown) => void) | undefined
let rejectInitPromise: ((reason?: unknown) => void) | undefined

// This promise handles the initialization
// status of the google maps script.
const initPromise: Promise<unknown> = new Promise((resolve, reject) => {
  resolveInitPromise = resolve
  rejectInitPromise = reject
})

export const InitMap = (): Promise<unknown> => {
  if (mapInitialized) return initPromise
  mapInitialized = true

  // The callback function is called by
  // the Google Maps script if it is
  // successfully loaded.
  ;(window as any)[CALLBACK_NAME] = () => {
    if (resolveInitPromise) {
      resolveInitPromise(window.google)
    }
  }

  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = `https://maps.googleapis.com/maps/api/js?key=${APY_KEY}&language=es&libraries=${libraries}&callback=${CALLBACK_NAME}&loading=async`

  script.onerror = () => {
    if (rejectInitPromise) {
      rejectInitPromise()
    }
  }

  document.querySelector('head')?.appendChild(script)

  return initPromise
}

interface OptMaps extends google.maps.MapOptions {
  with3d?: boolean
}

export const CreateMap = (element: HTMLElement | null, opts?: OptMaps) => {
  if (opts?.with3d) {
    opts.mapId = '90f87356969d889c'
  }

  return new google.maps.Map(element as HTMLElement, {
    ...opts,
    center: { lat: 30.893394, lng: -100.123801 },
    zoom: 4,
    mapTypeControl: false,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    minZoom: 2,
    maxZoom: 20,
    clickableIcons: false,
    restriction: {
      latLngBounds: {
        north: 85,
        south: -85,
        west: -180,
        east: 180,
      },
      strictBounds: false,
    },
    heading: 90,
    tilt: 0,
  })
}
