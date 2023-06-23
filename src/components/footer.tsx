import Link from 'next/link'

import Logo from './logo'
import IconButton from '@/components/icon-button'
import { TwitterIcon } from './svg-icons'

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-8 pt-16 lg:px-8">
        <div className="flex items-center justify-between">
          <Link aria-label="SydJS" href="/">
            <Logo />
          </Link>
          <IconButton
            aria-label="SydJS on Twitter"
            emphasis="low"
            href="https://twitter.com/sydjs"
            icon={TwitterIcon}
          />
        </div>
        <div className="mt-12 items-end md:flex">
          <div>
            <p className="flex items-center gap-1">
              <span className="text-sm font-medium">Powered by</span>
              <a
                aria-label="Keystatic"
                className="group"
                href="https://keystatic.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 111 16"
                  className="h-[16px] w-[111px]"
                >
                  <path
                    className="group-hover:fill-highlight"
                    fill="currentcolor"
                    stroke="currentcolor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.103 2.126a1 1 0 0 0-1.754-.773l-6.111 7.2A1 1 0 0 0 2 10.2h4.365l-.468 3.674a1 1 0 0 0 1.754.773l6.111-7.2A1 1 0 0 0 13 5.8H8.635l.468-3.674Z"
                  />
                  <path
                    fill="currentcolor"
                    d="M22.011 14V2.364h2.46v5.13h.154l4.188-5.13h2.948l-4.318 5.21L31.813 14h-2.944l-3.187-4.784-1.21 1.477V14h-2.46Zm11.032 0V2.364h7.84v2.028h-5.38v2.773h4.977v2.028h-4.977v2.779h5.403V14h-7.863Zm9.115-11.636h2.755l2.654 5.011h.113l2.654-5.011h2.755l-4.244 7.522V14h-2.443V9.886l-4.244-7.522ZM60.746 5.71c-.046-.458-.24-.814-.586-1.068-.344-.254-.812-.38-1.403-.38-.401 0-.74.056-1.017.17a1.43 1.43 0 0 0-.636.46c-.144.197-.216.42-.216.67a.957.957 0 0 0 .13.546c.099.155.233.29.404.403.17.11.367.207.59.29.224.08.463.148.717.205l1.045.25c.508.113.974.265 1.398.454.424.19.792.423 1.102.7.31.276.551.601.722.976.174.375.263.805.267 1.29-.004.712-.186 1.33-.546 1.852-.356.52-.87.923-1.545 1.21-.67.285-1.48.427-2.426.427-.94 0-1.758-.144-2.455-.432-.693-.288-1.235-.714-1.625-1.279-.386-.568-.589-1.27-.608-2.107h2.38c.027.39.14.716.336.977.2.257.468.453.801.585a3.18 3.18 0 0 0 1.142.193c.417 0 .779-.06 1.086-.181.31-.122.55-.29.721-.506.17-.216.256-.464.256-.744a.967.967 0 0 0-.233-.66c-.152-.178-.375-.33-.67-.454a6.816 6.816 0 0 0-1.074-.341l-1.267-.318c-.982-.239-1.756-.612-2.324-1.12-.569-.507-.85-1.19-.847-2.05-.004-.705.184-1.32.563-1.847.382-.527.907-.938 1.573-1.233.667-.296 1.425-.443 2.273-.443.864 0 1.618.147 2.261.443.648.295 1.152.706 1.512 1.233.36.526.545 1.136.557 1.83h-2.358Zm3.728-1.318V2.364h9.557v2.028H70.47V14h-2.432V4.392h-3.563ZM76.19 14h-2.636L77.57 2.364h3.17L84.751 14h-2.636L79.2 5.023h-.09L76.188 14Zm-.165-4.574h6.227v1.92h-6.227v-1.92Zm8.263-5.034V2.364h9.557v2.028H90.28V14H87.85V4.392h-3.562Zm13.59-2.028V14h-2.46V2.364h2.46Zm12.292 4.074h-2.489a2.427 2.427 0 0 0-.278-.858c-.14-.254-.32-.47-.54-.648a2.365 2.365 0 0 0-.761-.41 2.912 2.912 0 0 0-.926-.141c-.603 0-1.127.15-1.574.449-.447.295-.794.727-1.04 1.295-.246.564-.369 1.25-.369 2.057 0 .83.123 1.526.369 2.09.25.565.599.991 1.046 1.28.447.287.964.431 1.551.431.329 0 .634-.044.914-.13.285-.088.536-.215.756-.381.22-.17.402-.377.546-.62a2.41 2.41 0 0 0 .306-.83l2.489.012a4.484 4.484 0 0 1-.483 1.545 4.66 4.66 0 0 1-1.028 1.324c-.428.387-.94.694-1.534.92-.591.224-1.26.336-2.006.336-1.038 0-1.966-.235-2.784-.705-.815-.47-1.459-1.15-1.932-2.04-.47-.89-.705-1.967-.705-3.232 0-1.27.24-2.349.716-3.239.478-.89 1.125-1.568 1.944-2.034.818-.47 1.738-.704 2.761-.704a5.97 5.97 0 0 1 1.875.284c.579.189 1.093.466 1.54.83.447.359.81.8 1.091 1.323.284.523.465 1.121.545 1.795Z"
                  />
                </svg>
              </a>
            </p>
            <p className="mt-2 text-sm">
              A new static content management system by the fine folks at
              Thinkmill
            </p>
            <p className="mt-2 text-sm">
              <a
                href="https://github.com/Thinkmill/sydjs-keystatic"
                className="underline"
              >
                View source on GitHub
              </a>
            </p>
          </div>
          <p className="mt-8 flex-1 text-sm md:mt-0 md:text-right">
            © 2023 Thinkmill & Contributors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
