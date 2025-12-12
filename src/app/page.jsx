import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import ContactForm from '@/components/ContactForm';
import Item from '@/components/Item';
import Reviews from '@/components/Reviews';
import ProductList from '@/components/ProductList';
import { products } from '@/data/products';

const brandName =
  process.env.NEXT_PUBLIC_BRAND_NAME || 'pg mobile';
const companyLegal =
  process.env.NEXT_PUBLIC_COMPANY_LEGAL ||
  'PG MOBILE LIMITED PARTNERSHIP';
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@example.com';
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || '000-000-0000';
const companyAddress =
  process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
  '183 หมู่ที่ 1 ตำบลคำตากล้า อำเภอคำตากล้า จังหวัดสกลนคร 47250';

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pgmobilev9.com';
const siteUrl = rawSiteUrl.startsWith('http')
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

// Product หลัก (ใช้รูปโต๊ะตัวอย่างสินค้าให้ตรงกับ Thumbnail)
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'PG V9 สมาร์ทโฟนจาก pg mobile',
  image: [`${siteUrl}/images/table-thumbnail.jpg`],
  description:
    'PG Mobile | ร้านขายโทรศัพท์มือถือออนไลน์ จำหน่ายสมาร์ทโฟน PG V9 ราคาคุ้มค่า ประกันศูนย์ไทย',
  brand: {
    '@type': 'Brand',
    name: 'PG Mobile V9'
  },
  offers: {
    '@type': 'Offer',
    url: `${siteUrl}/#products`,
    priceCurrency: 'THB',
    price: '1190',
    availability: 'https://schema.org/InStock',
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'THB'
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'TH'
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 1,
          unitCode: 'd'
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 3,
          unitCode: 'd'
        }
      }
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'TH',
      returnPolicyCategory:
        'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn'
    }
  }
};

// ItemList สำหรับรายการสินค้าในหน้าแรก
const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'รายการสมาร์ทโฟนจาก pg mobile',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.name,
    url: `${siteUrl}/#${product.id}`
  }))
};

// FAQPage สำหรับ FAQ ทั้งหมดในหน้านี้
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'สินค้าเป็นของแท้หรือไม่? มีประกันศูนย์หรือเปล่า',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          `สินค้าทุกชิ้นที่จำหน่ายบนเว็บไซต์ ${brandName} เป็นสินค้าของแท้จากผู้จัดจำหน่ายที่ถูกต้อง ` +
          'พร้อมการรับประกันศูนย์ไทยตามเงื่อนไขของผู้ผลิต ไม่มีการจำหน่ายเครื่องละเมิดลิขสิทธิ์หรือเครื่องหิ้วที่ผิดกฎหมาย'
      }
    },
    {
      '@type': 'Question',
      name: 'ใช้เวลาจัดส่งสินค้านานเท่าไร และมีค่าจัดส่งหรือไม่',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'โดยทั่วไปใช้เวลาจัดส่งประมาณ 1–3 วันทำการในเขตตัวเมือง และ 2–5 วันทำการในพื้นที่ต่างจังหวัด ' +
          'ทั้งนี้ขึ้นอยู่กับบริษัทขนส่งและพื้นที่ปลายทาง ปัจจุบันเรามีโปรโมชั่นจัดส่งฟรีแบบเก็บเงินปลายทางภายในประเทศไทย ' +
          'สำหรับคำสั่งซื้อผ่านหน้าเว็บไซต์นี้ หากมีการเปลี่ยนแปลงจะแจ้งให้ทราบอย่างชัดเจนบนหน้าเว็บไซต์'
      }
    },
    {
      '@type': 'Question',
      name: 'สามารถชำระเงินแบบใดได้บ้าง มีเก็บเงินปลายทางหรือไม่',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'ปัจจุบันเรารองรับการชำระเงินแบบเก็บเงินปลายทาง (Cash on Delivery) ผ่านบริษัทขนส่งที่ร่วมให้บริการ ' +
          'รวมถึงรองรับการชำระเงินออนไลน์ในบางช่องทาง โดยรายละเอียดอาจมีการปรับเปลี่ยนตามช่วงเวลา ' +
          'กรุณาตรวจสอบที่หน้าชำระเงินก่อนยืนยันคำสั่งซื้อทุกครั้ง'
      }
    },
    {
      '@type': 'Question',
      name: 'หากได้รับสินค้าเสียหายหรือมีปัญหา ต้องทำอย่างไร',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          `หากคุณได้รับสินค้าเสียหาย หรือมีปัญหาในการใช้งานตั้งแต่แรก กรุณาถ่ายภาพหรือวิดีโอประกอบ ` +
          `และติดต่อทีมงานทันทีผ่านเบอร์ ${contactPhone} หรืออีเมล ${contactEmail} ` +
          'ภายในระยะเวลาที่ระบุในนโยบายการรับประกันหรือคืนสินค้า เราจะช่วยประสานงานกับศูนย์บริการหรือดำเนินการตามนโยบายให้เร็วที่สุด'
      }
    },
    {
      '@type': 'Question',
      name: 'เว็บไซต์นี้ปลอดภัยไหม ข้อมูลส่วนตัวและข้อมูลการชำระเงินถูกเก็บรักษาอย่างไร',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          `เว็บไซต์ของเราให้ความสำคัญกับความปลอดภัยของข้อมูลลูกค้า และใช้มาตรการด้านความปลอดภัยตามสมควร ` +
          `ข้อมูลส่วนบุคคลจะไม่ถูกเผยแพร่ให้บุคคลภายนอกโดยไม่จำเป็น ` +
          `คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่หน้า นโยบายความเป็นส่วนตัว และ นโยบายความปลอดภัยข้อมูล บนเว็บไซต์ ${brandName}`
      }
    }
  ]
};

export default function HomePage() {
  return (
    <main>
      <Item />

      {/* Structured Data สำหรับ Product/ItemList/FAQ */}
      <Script
        id="json-ld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Script
        id="json-ld-product-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListJsonLd)
        }}
      />
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section id="intro" className="py-4 py-md-5 bg-light">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold mb-3">
                {brandName} | ร้านขายโทรศัพท์มือถือออนไลน์
              </h1>
              <p className="lead mb-3">
                <strong>
                  <strong>PG mobile เว็บตรง100% </strong> <br />
                  <strong>PGเว็บตรงช่วงโปรโมชั่น</strong> <br />
                  <strong>PGmobile ลิขสิทธิ์แท้100%</strong>
                </strong>{' '}
                <br />
                มือถือแท้ ประกันศูนย์ไทย ราคาพิเศษ ผ่อน 0%* จัดส่งทั่วประเทศ โดย{' '}
                {companyLegal}
              </p>
              <ul className="mb-4">
                <li>สินค้าของแท้ 100% มีใบรับประกันจากผู้ผลิต</li>
                <li>ออกใบกำกับภาษีได้ในนาม {companyLegal}</li>
                <li>มีทีมซัพพอร์ตให้คำปรึกษาก่อนและหลังการขาย</li>
                <li>จัดส่งด่วนทั่วประเทศ มีเลข Tracking ตรวจสอบได้</li>
              </ul>
              <a href="#products" className="btn btn-primary btn-medium me-2">
                เลือกดูสินค้า
              </a>
              <a
                href="/contact"
                className="btn btn-outline-secondary btn-medium"
              >
                ติดต่อร้านค้า
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Image
                  src="/images/table-thumbnail.jpg"
                  alt="โต๊ะตัวอย่างสินค้า pg mobile"
                  width={800}
                  height={600}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductList products={products} brandName={brandName} />

      <section id="services" className="py-4 py-md-5 bg-gray">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h3 className="fs-4 mb-3">การรับประกันสินค้า</h3>
              <p>
                สินค้าทุกชิ้นเป็นของแท้ ประกันศูนย์ไทยอย่างน้อย 1 ปี
                สามารถติดต่อศูนย์บริการใกล้บ้าน หรือให้ {brandName}{' '}
                ช่วยประสานงานให้ได้
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="fs-4 mb-3">การจัดส่งและความปลอดภัย</h3>
              <p>
                จัดส่งสินค้าด้วยขนส่งเอกชนที่มีเลข Tracking ตรวจสอบได้ทุกขั้นตอน
                มีการห่อกันกระแทกอย่างดี และมีตัวเลือกเก็บเงินปลายทางในบางพื้นที่
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="fs-4 mb-3">การชำระเงิน</h3>
              <p>
                รองรับการชำระเงินผ่านบัตรเครดิต/เดบิต โอนผ่านธนาคาร
                และวอลเล็ตยอดนิยม ข้อมูลการชำระเงินของลูกค้าจะถูกเก็บรักษาอย่างปลอดภัย
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-4 py-md-5">
        <div className="container-md">
          <h2 className="h3 mb-3">คำถามที่พบบ่อย (FAQ)</h2>
          <p className="text-muted mb-4">
            รวมคำถามยอดนิยมเกี่ยวกับการสั่งซื้อ การชำระเงิน
            การจัดส่ง และการรับประกันสินค้า เพื่อให้คุณตัดสินใจได้อย่างมั่นใจ
          </p>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-1"
                  aria-expanded="true"
                  aria-controls="faq-collapse-1"
                >
                  สินค้าเป็นของแท้หรือไม่? มีประกันศูนย์หรือเปล่า
                </button>
              </h2>
              <div
                id="faq-collapse-1"
                className="accordion-collapse collapse show"
                aria-labelledby="faq-heading-1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  สินค้าทุกชิ้นที่จำหน่ายบนเว็บไซต์ {brandName}{' '}
                  เป็นสินค้าของแท้จากผู้จัดจำหน่ายที่ถูกต้อง
                  พร้อมการรับประกันศูนย์ไทยตามเงื่อนไขของผู้ผลิต
                  ไม่มีการจำหน่ายเครื่องละเมิดลิขสิทธิ์หรือเครื่องหิ้วที่ผิดกฎหมาย
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-2"
                  aria-expanded="false"
                  aria-controls="faq-collapse-2"
                >
                  ใช้เวลาจัดส่งสินค้านานเท่าไร และมีค่าจัดส่งหรือไม่
                </button>
              </h2>
              <div
                id="faq-collapse-2"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  โดยทั่วไปใช้เวลาจัดส่งประมาณ 1–3 วันทำการในเขตตัวเมือง
                  และ 2–5 วันทำการในพื้นที่ต่างจังหวัด ทั้งนี้ขึ้นอยู่กับบริษัทขนส่ง
                  และพื้นที่ปลายทาง ปัจจุบันเรามีโปรโมชั่น{' '}
                  <strong>จัดส่งฟรีแบบเก็บเงินปลายทาง</strong>{' '}
                  ภายในประเทศไทยสำหรับคำสั่งซื้อผ่านหน้าเว็บไซต์นี้
                  หากมีการเปลี่ยนแปลงจะแจ้งให้ทราบอย่างชัดเจนบนหน้าเว็บไซต์
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-3"
                  aria-expanded="false"
                  aria-controls="faq-collapse-3"
                >
                  สามารถชำระเงินแบบใดได้บ้าง มีเก็บเงินปลายทางหรือไม่
                </button>
              </h2>
              <div
                id="faq-collapse-3"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  ปัจจุบันเรารองรับการชำระเงินแบบเก็บเงินปลายทาง (Cash
                  on Delivery) ผ่านบริษัทขนส่งที่ร่วมให้บริการ
                  รวมถึงรองรับการชำระเงินออนไลน์ในบางช่องทาง
                  โดยรายละเอียดอาจปรับเปลี่ยนตามช่วงเวลา
                  กรุณาตรวจสอบที่หน้าชำระเงินก่อนยืนยันคำสั่งซื้อทุกครั้ง
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-4"
                  aria-expanded="false"
                  aria-controls="faq-collapse-4"
                >
                  หากได้รับสินค้าเสียหายหรือมีปัญหา ต้องทำอย่างไร
                </button>
              </h2>
              <div
                id="faq-collapse-4"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  หากคุณได้รับสินค้าเสียหาย หรือมีปัญหาในการใช้งานตั้งแต่แรก
                  กรุณาถ่ายภาพ/วิดีโอประกอบ และติดต่อทีมงานทันทีผ่านเบอร์{' '}
                  {contactPhone} หรืออีเมล{' '}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>{' '}
                  ภายในระยะเวลาที่ระบุในนโยบายการรับประกัน/คืนสินค้า
                  เราจะช่วยประสานงานกับศูนย์บริการหรือดำเนินการตามนโยบายให้เร็วที่สุด
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-5"
                  aria-expanded="false"
                  aria-controls="faq-collapse-5"
                >
                  เว็บไซต์นี้ปลอดภัยไหม ข้อมูลส่วนตัวและข้อมูลการชำระเงินถูกเก็บรักษาอย่างไร
                </button>
              </h2>
              <div
                id="faq-collapse-5"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-5"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  เว็บไซต์ของเราให้ความสำคัญกับความปลอดภัยของข้อมูลลูกค้า
                  ใช้มาตรการด้านความปลอดภัยตามสมควร
                  และไม่เผยแพร่ข้อมูลส่วนบุคคลให้บุคคลภายนอก
                  โดยไม่จำเป็น คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่{' '}
                  <a href="/privacy">นโยบายความเป็นส่วนตัว</a>{' '}
                  และ <a href="/security">นโยบายความปลอดภัยข้อมูล</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="policy" className="py-4 py-md-5">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="fs-4 mb-3">นโยบายความเป็นส่วนตัว</h3>
              <p>
                {brandName} ให้ความสำคัญกับข้อมูลส่วนบุคคลของลูกค้าเป็นอย่างมาก
                ข้อมูลที่เราเก็บ ได้แก่ ชื่อ-นามสกุล เบอร์โทร อีเมล
                และที่อยู่สำหรับจัดส่งสินค้า ใช้เพื่อการติดต่อกลับ
                ยืนยันคำสั่งซื้อ ออกเอกสาร และจัดส่งสินค้าเท่านั้น
              </p>
              <a
                href="/privacy"
                className="btn btn-sm btn-outline-secondary"
              >
                อ่านนโยบายฉบับเต็ม
              </a>
            </div>
            <div className="col-lg-6 mb-4">
              <h3 className="fs-4 mb-3">
                เงื่อนไขการใช้งาน &amp; การสั่งซื้อ
              </h3>
              <p>
                การใช้งานเว็บไซต์และการสั่งซื้อผ่าน {brandName}{' '}
                ถือว่าท่านยอมรับข้อกำหนดและเงื่อนไขการใช้งาน
                ราคาและโปรโมชั่นอาจมีการเปลี่ยนแปลงได้โดยไม่ต้องแจ้งล่วงหน้า
              </p>
              <a
                href="/terms"
                className="btn btn-sm btn-outline-secondary"
              >
                อ่านเงื่อนไขฉบับเต็ม
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5 bg-light">
        <div className="container-md">
          <h2 className="text-center mb-4">ติดต่อเรา</h2>
          <p className="text-center mb-5">
            หากมีข้อสงสัยหรือต้องการติดต่อบริการหลังการขาย
            สามารถส่งข้อความถึงเราได้ทันที หรือไปที่หน้า{' '}
            <a href="/contact">ติดต่อเรา</a> โดยตรง
          </p>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="mb-3">ส่งข้อความหาเรา</h4>
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h4 className="mb-3">ข้อมูลร้านค้า</h4>
                  <p className="mb-1 fw-bold">{companyLegal}</p>
                  <p className="mb-1">{companyAddress}</p>
                  <p className="mb-1">โทร: {contactPhone}</p>
                  <p className="mb-3">
                    อีเมล:{' '}
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </p>
                  <p className="text-muted mb-0">
                    เวลาทำการ: จันทร์ – อาทิตย์ 10:00 – 20:00 น.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews columns={6} limit={6} heading="รีวิวจากลูกค้า" />
    </main>
  );
}
