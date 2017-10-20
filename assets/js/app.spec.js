// app.js directive / factory / routes tests

describe('Source Factory', function() {
    var sourceApi
    var $httpBackend

    var source = {
        _id: 1,
        name: 'The Australian',
        url: 'https://australian.com/rss'
    }

    var headers = {
        'Content-Type': "application/json"
    }

    beforeEach(angular.mock.module('SourceService'))

    beforeEach(inject(function(_sourceAPIservice_, _$httpBackend_) {
        sourceApi = _sourceAPIservice_
        $httpBackend = _$httpBackend_
    }))

    it('should exist', function() {
        expect(sourceApi).toBeDefined()
    })

    describe('.getSources()', function() {
        beforeEach(function() {
            $httpBackend.expectGET('/api/sources')
                .respond(200, { message: 'ok', id: 0 })

            sourceApi.getSources()
            $httpBackend.flush()
        })

        it('should exist', function() {
            expect(sourceApi.getSources).toBeDefined()
        })

        it('should send an HTTP GET request', function() {
            $httpBackend.verifyNoOutstandingExpectation()
            $httpBackend.verifyNoOutstandingRequest()
        })
    })

    describe('.addSource()', function() {
        beforeEach(function() {
            $httpBackend.expectPOST('/api/sources', source, headers)
                .respond(200, { message: 'ok', id: 0 })

            sourceApi.addSource(source)
            $httpBackend.flush()
        })

        it('should exist', function() {
            expect(sourceApi.addSource).toBeDefined()
        })

        it('should send an HTTP POST request', function() {
            $httpBackend.verifyNoOutstandingExpectation()
            $httpBackend.verifyNoOutstandingRequest()
        })
    })

    describe('.deleteSource()', function() {
        beforeEach(function() {
            $httpBackend.expectDELETE('/api/sources/1', headers)
                .respond(200, { message: 'ok', id: 0 })

            sourceApi.deleteSource(1)
            $httpBackend.flush()
        })

        it('should exist', function() {
            expect(sourceApi.deleteSource).toBeDefined()
        })

        it('should send an HTTP DELETE request', function() {
            $httpBackend.verifyNoOutstandingExpectation()
            $httpBackend.verifyNoOutstandingRequest()
        })
    })
})

describe('RSS Factory', function() {
    var rssApi
    var $httpBackend

    beforeEach(angular.mock.module('RssService'))

    beforeEach(inject(function(_rssAPIservice_, _$httpBackend_) {
        rssApi = _rssAPIservice_
        $httpBackend = _$httpBackend_
    }))

    it('should exist', function() {
        expect(sourceApi).toBeDefined()
    })

    describe('.getLinks()', function() {
        beforeEach(function() {
            $httpBackend.expectGET('https://api.rss2json.com/v1/api.json')
                .respond(200, { message: 'ok', id: 0 })

            rssApi.getLinks(source)
            $httpBackend.flush()
        })

        it('should exist', function() {
            expect(rssApi.getLinks).toBeDefined()
        })

        it('should send an HTTP GET request', function() {
            $httpBackend.verifyNoOutstandingExpectation()
            $httpBackend.verifyNoOutstandingRequest()
        })
    })

})