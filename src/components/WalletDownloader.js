import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from './link'
import Modal from 'react-modal'
import MDReactComponent from 'markdown-react-js'
import { FaDownload, FaCogs } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

Modal.setAppElement('#___gatsby')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    min-width: 22rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const ErrorContainer = styled.div`
  text-align: center;
`

const ChecksumArea = styled.textarea`
  border: 0.1rem solid #bada55;
  padding: 0.5rem;
  display: block;
  margin: 0 auto;
  resize: none;
  background-color: #eee;
  color: ${({ theme }) => theme.palette.text.primary};
  scrollbar-width: thin;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 0.35rem;
  }
`

const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100vh;
  max-height: 60rem;
  width: 100vw;
  max-width: 120rem;
  transform: translate(-50%, -50%);
  padding: 6rem;
  background-color: ${({ theme }) => theme.palette.background.paper};

  ${({ theme }) => theme.breakpoints.down('xs')} {
    padding: 4rem 2rem 6rem;
  }
`

const ModalContentInner = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 0.7rem;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 0.35rem;
  }
`

const CloseModal = styled(Link)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 3rem;

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`

const WalletDownloaders = ({ settingsEndpoint }) => {
  const [ platformsData, setPlatformsData ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ hasError, setHasError ] = useState(false)
  const [ activeModal, setActiveModal ] = useState('')
  const checksumRefs = {
    windows: useRef(null),
    darwin: useRef(null),
    linux: useRef(null)
  }

  const validateData = (data) => {
    if (!data.platforms) return false
    const validPlatforms = [ 'windows', 'darwin', 'linux' ]
    if (Object.keys(data.platforms).length !== validPlatforms.length) return false
    let valid = true
    validPlatforms.forEach(platform => {
      if (!data.platforms[platform]) {
        valid = false
      } else {
        const validKeys = [ 'signature', 'hash', 'URL', 'version', 'SHA256' ]
        if (Object.keys(data.platforms[platform]).length !== validKeys.length) {
          valid = false
        } else {
          validKeys.forEach(key => {
            if (typeof data.platforms[platform][key] !== 'string' || !data.platforms[platform][key]) valid = false
          })
        }
      }
    })

    return valid
  }

  const loadDaedalusData = async () => {
    try {
      setLoading(true)
      const result = await fetch(settingsEndpoint)
      const jsonResult = await result.json()
      if (!validateData(jsonResult)) throw new Error('Invalid data')
      setPlatformsData(Object.keys(jsonResult.platforms).map(platform => ({ ...jsonResult.platforms[platform], key: platform })))
      setLoading(false)
    } catch (error) {
      console.error(error.message, error)
      setHasError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDaedalusData()
  }, [])

  const getOrderedPlatforms = (order) => {
    const platforms = []
    order.forEach(platform => {
      platforms.push(platformsData.filter(({ key }) => platform === key).shift())
    })

    return platforms.filter(platform => Boolean(platform))
  }

  const checksumOnClick = (SHA256, platform, version) => (e) => {
    e.preventDefault()
    const el = checksumRefs[platform].current
    if (!el) return
    el.select()
    el.setSelectionRange(0, SHA256.length)
    document.execCommand('copy')
  }

  const openModal = (name) => (e) => {
    e.preventDefault()
    setActiveModal(name)
  }

  const getFilename = (URL) => URL.replace(/^.*\/(.*?)$/, '$1')

  const renderTemplateString = (content, { SHA256, URL, version, hash, signature }) => {
    const params = {
      sha256: SHA256,
      version,
      hash,
      signature,
      filename: getFilename(URL)
    }

    return content.replace(/{{\s?([^}\s]+)\s?}}/g, (original, key) => {
      return params[key] || original
    })
  }

  const getPGPFilename = (URL) => `${getFilename(URL)}.asc`
  const getPGPBlob = (signature) => window.Blob && new window.Blob([ signature ], { type: 'text/txt' })
  const getPGPSignatureHref = (signature) => {
    const blob = getPGPBlob(signature)
    return blob ? URL.createObjectURL(blob) : '#'
  }

  const onDownloadPGPSignature = (signature, URL) => (e) => {
    if (window.navigator.msSaveBlob || e.target.href === '#') e.preventDefault()
    if (window.navigator.msSaveBlob) window.navigator.msSaveBlob(getPGPBlob(signature), getPGPFilename(URL))
  }

  const unCacheURL = (url) => {
    return url + '?t=' + (new Date().getTime())
  }

  return (
    <div marginTop={4} marginBottom={4} id='walletDownloader'>
      {platformsData && !hasError && !loading &&
        <Container>
          {getOrderedPlatforms(content.downloaders_content.platforms_order.map(platform => platform.platform_name)).map(({ key, signature, hash, URL, version, SHA256 }) => (
            <div flex={1} key={key} display='flex' flexDirection='column' justifyContent='flex-end' textAlign='center'>
              <span><strong>{content.downloaders_content[key].full_label}</strong></span>
              <span>{content.downloaders_content.version}: {version}</span>
              <div marginTop={1} marginBottom={1}>
                <Button
                  component={Link}
                  href={unCacheURL(URL)}
                  variant='contained'
                  color='primary'
                  tracking={{ label: `download_${key}_${version}` }}
                >
                  {content.downloaders_content[key].short_label}<div component='span' marginLeft={1}><FaDownload /></div>
                </Button>
              </div>
              <div>
                <span>{content.downloaders_content.sha_checksum}</span>
                <ChecksumArea
                  ref={checksumRefs[key]}
                  title={content.downloaders_content.copy_to_clipboard}
                  onClick={checksumOnClick(SHA256, key, version)}
                  aria-label={content.downloaders_content.copy_to_clipboard}
                  value={SHA256}
                  readOnly
                  rows={3}
                />
                <Link
                  href='#'
                  onClick={openModal(`${key}_checksum`)}
                  tracking={{ label: `view_checksum_instructions_${key}_${version}` }}
                >
                  {content.downloaders_content.verify_checksum}
                </Link>
                <Modal
                  open={activeModal === `${key}_checksum`}
                  onClose={openModal('')}
                  isOpen={activeModal}
                  onRequestClose={openModal('')}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <ModalContent>
                    <CloseModal
                      href='#'
                      onClick={openModal('')}
                    >
                      <MdClose />
                    </CloseModal>
                    <ModalContentInner>
                      <MDReactComponent
                        text={renderTemplateString(content.downloaders_content[key].checksum_instructions, { SHA256, signature, hash, URL, version })}
                      />
                    </ModalContentInner>
                  </ModalContent>
                </Modal>
              </div>
              <div marginTop={1}>
                <Link
                  onClick={onDownloadPGPSignature(signature, URL)}
                  tracking={{ label: `download_pgp_signature_${key}_${version}` }}
                  href={getPGPSignatureHref(signature)}
                  download={getPGPFilename(URL)}
                >
                  {content.downloaders_content.pgp_signature}<div marginLeft={1} component='span'><FaDownload /></div>
                </Link>
                <div>
                  <Link
                    href='#'
                    onClick={openModal(`${key}_pgp`)}
                    tracking={{ label: `view_pgp_instructions_${key}_${version}` }}
                  >
                    {content.downloaders_content.verify_signature}
                  </Link>
                  <Modal
                    open={activeModal === `${key}_pgp`}
                    onClose={openModal('')}
                    disableScrollLock
                  >
                    <ModalContent>
                      <CloseModal
                        href='#'
                        onClick={openModal('')}
                      >
                        <MdClose />
                      </CloseModal>
                      <ModalContentInner>
                        <MDReactComponent
                          text={renderTemplateString(content.downloaders_content[key].signature_instructions, { SHA256, signature, hash, URL, version })}
                        />
                      </ModalContentInner>
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            </div>
          ))}
        </Container>
      }
      {loading &&
        <LoadingContainer>
          <div>
            <h3>Loading...</h3>
          </div>
        </LoadingContainer>
      }
      {hasError &&
        <ErrorContainer pl={12} pr={12}>
          <h1 color='error'><FaCogs /></h1>
          <h3 color='error'>{content.downloaders_content.no_releases_available}</h3>
        </ErrorContainer>
      }
    </div>
  )
}

WalletDownloaders.propTypes = {
  settingsEndpoint: PropTypes.string.isRequired
}

export default WalletDownloaders
