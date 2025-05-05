import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import channelBanner from '../../assets/channelBanner.png'
import './Channel.css'

import juxtopposed from '../../assets/juxtopposed.png'

const Channel = () => {
  return (
    <>
      <Navbar/>
      <div className='channelPage'>
          <Sidebar/>
          <div className="channel">
            <img src={channelBanner} alt="" className='channelBanner'/>
            <div className="channelHead">
              <img src={juxtopposed} alt="" className='channelProfileImg'/>
              <div className="channelStats">
                <p style={{fontSize: "28px"}}>Juxtopposed</p>
                <p style={{fontSize: "15px"}}>@juxtopposed . <span>295k</span> subscribers . <span>31</span> videos . <span>subscribe for more cats(and design content,of course)</span>...more</p>
              </div>

              <div className="quickActions">
                <div className="quickChannelLinks">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="24" height="24" fill="url(#pattern0_144_9203)"/>
                    <defs>
                    <pattern id="pattern0_144_9203" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_144_9203" transform="scale(0.03125)"/>
                    </pattern>
                    <image id="image0_144_9203" width="32" height="32" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACZUlEQVRYCe1XK5YCMRBsdhUOHJIjgENyBCQSiYQbzBG4ARIJEofFcQS4ASBRs6m8qWy/mZ5JQIAh7+VlqHS6qj+T2W2JSO7mx8bPx5gL4q+ASga2263keW7OyWTydMVOp5P31XQWTRhmp9PJz+dzfr1e8yzLwsRvzH6/H2z1Oet5tVq5WHLvw9ovsH9yGo3HY39wsVgEstls5rHD4RAw2lsrxGNgtfYVVhWATaofDAbBwXq99k61MOUo2GEfw5UzYJZdgdkCWAqUA88wJtZUCgjG0OcayOHXFgCcpUA2aEfMKgX6A8SYT/RKvQCQshQgpghiuhQkb8oOz5fWZgFIu3uVfFS6FMBIRhukXgstEYUASnizABizrrqpgEEAhKQ2Z4mYguICcJCdrdNODJEnvG4kLK9pAiACjce0MxpgGC+knkLSBaDRIACkFEAMnc8e4V7K+uuMMjeTxu12k8fjIfP5XO73uxyPRyE2nU6l3W7Lfr9P8qWNQjQOjD4zYqRd35JoUIwXShEnpTD9uqEUOu3Yw2+N8VxkTRfAKNH9fAOsW1JjEXJkPE2A9XWjIJ123pLu+x8tZ8EdF0DycmRW2omhRHhOCLBZACLBwI1nOUP0GLgNuc+bU7+u3DPWegHseDQWno3DHmPa8UcLbdgjWInVrLYAEII4Rg6nOu1aKDJQvjkNEVUBdIjU6nfdOByiYyl02plBjZV9mDfhZrOR0Wgky+VSdrudOxMfl8tFut2u4EZ0xDIcDsWJl16v533x5rQ8hSjcpv+qIfJXvm46c/ChR10pWiC1VL0Lq/xj8i5i8nwF/AGwrEyIeCf8LgAAAABJRU5ErkJggg=="/>
                    </defs>
                  </svg>


                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="24" height="24" fill="url(#pattern0_144_9204)"/>
                    <defs>
                    <pattern id="pattern0_144_9204" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_144_9204" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_144_9204" width="48" height="48" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAEU0lEQVRoBcVYPW8UMRD13UXhIxL5UEQTQFH+BoiCIiESSHThR4AEZRoKmpQgwY9IOiSQgIYiSsOvSASpIpQCiQ9FuRx+vp3NeNbeHXv3iKWN17P2+L2ZN7vx9daePTBdtk+v3o+4v16vx4fG7ucbvKfpg6n0Jf4KCdh/Wh19fv3BI9iWUDaBVOBVKmMLEcolkkygK+CSUC6RvnRUN54UeL4nEeG2untVBv4HcA6SSGhk1UigLfjV2VlzdTDg+My742NvHBuASBOJWgm1BU/Afg+Hhi7YHi0slBfNifWUjdjzKIGuwN+emTGr8/PuWrfAiQh6NJBpanUkggS6Ak/Afp2cGFzD0agkQmQwhzJC80N9jERjDYScNdnubByYG9cH5vBoaPaWrhlzadEt2Tw4MFfOztz9zPS0AYmPRT2gTkBEWx+EoWeLhO5dnxt9Au05s4Ptr6vGTBUyGZwnHGQWp8bxG9h/N0CEir2OhCzqc492s67BSzJmaKNfXFvLy+bH6WkpLSmpytrCIKXkEYgtitkR9cdPvzu5xOZE7ZYISLxYWXFEUB9aEtxnSSA1+jHJcOeN9yIbkkRsPc9CSSA2OWTvBDx3XGSD3lT0SPOKdQRSo483zCTan/44nhopURaSM4DoT6QVWUBha6UEHEkEUqSz8/aWwWXu2VfoXSVlJiXlCpP0IdNIx4EO7U4kdkMPqzZkgVrdB66fon98WetaFDxfRES4TdyHakFMcUPUgVpCKfLxNtuyZ3hc2sZkxLMQW66WUEg+7n+dnWXnW/764G3418oBJDYLWSALSil5fgIDdQbkWg4ez0ZMs3LuJMfZBPaKyHNwF0EimwAHfpH3agLyDRT6oEXr4DLTP9judkdZTUBKBkXNSfB7Dx4Kl4rXexAZ2DMDzgo48OCc0NT6958/bJ5VeJFZAAn8O02v2I0n35r2U0WfTm38kBNyjMON+jUacsBt229uuuHh0b47H1Q+aomy4dGvO6GpJQR0kJHMAtkd+mIO7pENl5Ev9jcgLXgmH/LX1CcRgDNZC6ENQiRD8zxbAR7nZHlG9uaJgSOQUgdYLwHyAqZ6EPuohtC+BB+TDx3ukzMAJFJK9EbKPh8z6fDCjYHn0SgJpGYhRII7Vt1b4EZIh9bVgafoY26rtxDVQ5ZsCuCQzWLxzufRJyJNfZkBTEzNAjmX2SB7pS8izqNOHywOXht9+K/8MgdjyiEH82WjjKDY9/bXoz8tUsFifc6vcljXSkJwEGokLTx7ufTT/sVlnFTQ00eKRx32usjjeagFCUBKbbPAN4NM0HjEMdZEHfPQeOGOLeO/QQnRhC5IrM3NkTvXE2gyaqIeAw8fwQyQ864ykQOaMNSBx5zaDJCTNpmInhHIeU3fBB5LVQRojxwiOQQ0wAmT9x0gY6zP/U7E/IXsKeCxPikDfENtNrQZSAVOWLIJkIMmIk0EcoHT/q0JkCPqJSFJoC1g2of6fxnWBE9SCUkYAAAAAElFTkSuQmCC"/>
                    </defs>
                  </svg>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="24" height="24" fill="url(#pattern0_144_9205)"/>
                    <defs>
                    <pattern id="pattern0_144_9205" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_144_9205" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_144_9205" width="48" height="48" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                    </defs>
                  </svg>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="24" height="24" fill="url(#pattern0_144_9206)"/>
                    <defs>
                    <pattern id="pattern0_144_9206" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_144_9206" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_144_9206" width="48" height="48" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAFFUlEQVRoBdVZYWwURRR+b/eud7SUWgptpQQDtIIh1hKllbTiD6OY2tIQE0UJIf7QRvGHVCSeIscRoAZJiQnGNMZoTQTFNqaUNEZjDKbGUIRyIKZR2xoD2oIUsFTa690+Z9psuR53u2/3bhEnaWbmzXvfvG92Zue7La58qQr+z8VlJ/l3rxbOzRloLkPAhSI+wwgjs+hhMhoHCg0Dunsb55S1fn72cNjQN84gWn0CB3tOPo4I9QCRXAB3VhzMSRNFrsGMu1YDaCZ5kXYJAP8ABP+j2oWWSQBGQ2H4jLusnlvl+qwnGEBUmgGUIrPkubjjfqhkA+ISQaL5CyV3m5yLG88iIAGfPrKzTkyylQuchJ+/9lzHRm48i8Aj3d35gOHXuKBJ+Sly8V2+1sGhezg4LAI5Ay2BlG4Zo8zkeRFbypOzYJORmz7GIoBID+gBN6+mxzhzsQhMHFoOXAp95MFmFCYBBtJ/5MIkoP1y0/MjOsOZk0WASDnBAUuxTxcHj0XAkz1f3LxjVziAKfERN3PfUJaPg8UiUDMzMwjk2sUBTI1PuP7LxYv7OVgsAhJo/4OvNwDRdg5oMj7DaTPebiyo2MsVdkmJOZX+NBRzkkj6ouduFHOR0akKVXFftivm2KJJX9UnFpa0CDl99OLgch8qWKvbE9X3Rg75ANMmJLeQzsOeWQXH80vLz0/LKZYxEUShROFgaWf77uen/3o2EU4iu+UnsKa/bZ2K8AYQzBby97ZEwLr947xq1NvHqg+tiSjoCxPkDSswS7dnaPCXC2FA1ah+WduqT3Q7p2afAQm2dqBtn0j+I9Es4iQfncCJVa27vAQHMiJUnKVR3pwwqfqf7Eu7HJd+zsjp/rbNIqEN0Ulx26eqWje7NWS9FqVfoOTZOi426wl4f6gtFPuAlUDsxN8/E8gUB3RLrN24j1tOPxlYYOwzMcoioCC8aHXLSHj3KIDnYolPkBck+EX6j4wsZZFmERAHdi1/+qmeIVRYsnhqFMAoYWWsLV6fR4DxtokHLm1XEJYkGjOyy4NtNK6P8Qjo3rdgzSVgW05nEbBkcezaDKt4KtYWr88iIO5923JaBToeb2IzGzfOlIC8VIhgmzjIQq9YK2MeAK+3a4dYgCErkdJfxnFiTAlIVXggv7pbgIrfBNbL3Z/6ewGIlcx1dNqx9btjv1/vJ26ZEtBDr93X2IAEAb1vpfaffK9hTCHWAki/4sM1ux2T09Fizh0yF3MfzrtRzKVHaH705Sa3zD8q9tkRc5bVqFx5ec3X/Dj6svg6bSqne87sdEU/LSktpl9YWgEaFI656HaXBpcFzumrs7s6ln/gt3RWJK5lAkfWl64T30hfFbH5I2poZnRy8dor3+8Si+1cmbI6ZtN8u75snzg0G8Qbabykh9PMQhwfZxGQr9KND53fJJbSlpx2kgXrLbS9fNk8QnzFyUTsYrMIXPK21ykEpvvdbhLJxLEIEMJTyUziZCyLwK26+nJhWAScXMFksVkENIRBOxOJuJ/sxFmJYRFADb6yAqr7Cu30jd52qmYRUJHqrT4F6Z89UtngVOI6LotAeVNnEIne0oM4tfTnSmIOXiIfFgEZvPfr3D0ExPo2JJTGOyuaOt/kSuJEyXHsauH9d3L8oPvvn7U7guc6fisp6BW38iJxN4ivjDBND5ZbRtj6hO2FFU1H9+h2p2vLalQmJCVxSGuvQKDJf0YTYDBNqbQliZMhaYtAMhOmOvZfGgGQXOt8BiAAAAAASUVORK5CYII="/>
                    </defs>
                  </svg>
                </div>
                
                <button className='channelSubscribeBtn'>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.35123 17.0123C1.13772 17.0123 0.958785 16.9402 0.814434 16.7958C0.669915 16.6513 0.597656 16.4722 0.597656 16.2585C0.597656 16.045 0.669915 15.8661 0.814434 15.7217C0.958785 15.5775 1.13772 15.5054 1.35123 15.5054H2.41401V8.00815C2.41401 6.65691 2.83107 5.46217 3.66519 4.42392C4.49915 3.38566 5.56989 2.7216 6.87742 2.43172V1.80576C6.87742 1.45694 6.99941 1.16037 7.2434 0.916041C7.48739 0.671884 7.78363 0.549805 8.13212 0.549805C8.48077 0.549805 8.77742 0.671884 9.02208 0.916041C9.26691 1.16037 9.38932 1.45694 9.38932 1.80576V2.43172C10.6969 2.7216 11.7676 3.38566 12.6015 4.42392C13.4357 5.46217 13.8527 6.65691 13.8527 8.00815V15.5054H14.9155C15.129 15.5054 15.308 15.5776 15.4523 15.722C15.5968 15.8665 15.6691 16.0456 15.6691 16.2593C15.6691 16.4728 15.5968 16.6517 15.4523 16.7961C15.308 16.9402 15.129 17.0123 14.9155 17.0123H1.35123ZM8.13161 19.8334C7.63174 19.8334 7.20439 19.6556 6.84954 19.2999C6.49452 18.9442 6.31701 18.5166 6.31701 18.0171H9.94973C9.94973 18.5183 9.77172 18.9463 9.4157 19.3012C9.05968 19.656 8.63165 19.8334 8.13161 19.8334ZM3.92116 15.5054H12.3456V8.00815C12.3456 6.84497 11.9344 5.85218 11.112 5.02979C10.2894 4.20722 9.29655 3.79594 8.13337 3.79594C6.97019 3.79594 5.97732 4.20722 5.15475 5.02979C4.33236 5.85218 3.92116 6.84497 3.92116 8.00815V15.5054Z" fill="white"/>
                  </svg>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Channel