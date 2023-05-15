export default {
  images: [
    {
      name: '键位.jpg'
    },
    {
      name: 'vue生命周期.png'
    }
  ],
  libs: [
    {
      name: 'plugin',
      children: [
        {
          name: 'base64.js'
        },
        {
          name: 'md5.js'
        }
      ]
    },
    {
      name: 'mapbox',
      children: [
        {
          name: 'mapbox-gl.js'
        },
        {
          name: 'mapbox-gl.css'
        }
      ]
    },
    {
      name: 'Se3D',
      children: [
        {
          name: 'se-3d.js'
        },
        {
          name: 'Widgets/se-3d.css'
        }
      ]
    }
  ]
}
